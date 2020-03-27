var rows = document.querySelector(".rows").value
var cols = document.querySelector(".columns").value
var playgroundtb = document.querySelector("#playground")
var playground = [];
var attackers = [];
var autoattack;
function generatePlayground() {
    playground = []
    attackers = [];
    playgroundtb.innerHTML = ""
    for (let i = 1; i <= document.querySelector(".rows").value; i++) {
        let tr = document.createElement("tr");
        let trArray = [];
        for (let j = 1; j <= document.querySelector(".columns").value; j++) {
            let td = document.createElement("td");
            td.innerHTML = "🧟‍♂️";
            td.className = "zombie"
            td.onclick = function () {
                placeFighter(i - 1, j - 1)
            }
            tr.appendChild(td);
            trArray.push(td);
        }
        playground.push(trArray);
        playgroundtb.appendChild(tr);
    }
}

function placeFighter(row, col) {
    let td = playground[row][col];
    td.innerHTML = "🦸‍♂️"
    td.className = "fighter";
    attackers.push({
        element: td,
        row: row,
        col: col
    });
}

function placeMinFighters() {
    console.log("Fighters deployed")
    generatePlayground();
    placeFighter(1, 2)
    placeFighter(1, 3)
    placeFighter(1, 4)
    placeFighter(2, 2)
    placeFighter(3, 3)
}

function placeMaxFighters() {
    console.log("Max fighters deployed")
    generatePlayground();
    placeFighter(7, 2)
    placeFighter(7, 3)
    placeFighter(8, 4)
    placeFighter(6, 5)
    placeFighter(5, 1)
    placeFighter(4, 2)
    placeFighter(9, 3)
    placeFighter(9, 4)
    placeFighter(9, 2)
    placeFighter(9, 3)
    placeFighter(2, 7)
    placeFighter(3, 7)
    placeFighter(4, 8)
    placeFighter(5, 6)
    placeFighter(1, 5)
    placeFighter(2, 4)
    placeFighter(3, 9)
    placeFighter(4, 9)
    placeFighter(2, 9)
    placeFighter(3, 9)
}
var toRemove=[];
function attack() {
    if (attackers.length == 0) {document.querySelector('.message').innerHTML=`No attackers present `; return}
    console.log("Attacking ");
    let length= attackers.length;
    for (let k = 0; k <length; k++) {
        let friends = getFriendly(attackers[k].row, attackers[k].col, false);
        console.log("Friends of attacker" + attackers[k].element +" "+ friends);
        if (friends < 2 || friends > 3) {
            playground[attackers[k].row][attackers[k].col].innerHTML = "🧟‍♂️";
            playground[attackers[k].row][attackers[k].col].className = "zombie";
            toRemove.push(attackers[k]);
        }
    }
    document.querySelector('.message2').innerHTML=`Heroes died at this point of time : ${toRemove.length} `; 
    toRemove.forEach( attacker =>{
         attackers.splice(attackers.indexOf(attacker), 1);
         });
    toRemove=[];
    document.querySelector('.message2').innerHTML+=`<br>   No of heroes: ${attackers.length}`;     
}

function getFriendly(row, col, end) {
    console.log("getting friends");
    let friends = 0;
    if (!(row - 1 < 0)) {
        if (playground[row - 1][col].className == "fighter") {
            friends++;

        } else if (!end) {
            if (getFriendly(row - 1, col, true) == 3) {
                playground[row - 1][col].className = "fighter";
                playground[row - 1][col].innerHTML = "🦸‍♂️";
                attackers.push({
                    element: playground[row - 1][col],
                    row: row - 1,
                    col: col
                });
            }
        }
    }
    if (!(row + 1 > rows-1)) {
        if (playground[row + 1][col].className == "fighter") {
            friends++;
        } else if (!end) {
            if (getFriendly(row + 1, col, true) == 3) {
                playground[row + 1][col].className = "fighter";
                playground[row + 1][col].innerHTML = "🦸‍♂️";
                attackers.push({
                    element: playground[row + 1][col],
                    row: row + 1,
                    col: col
                })
            }
        }
    }
    if (!(col - 1 < 0)) {
        if (playground[row][col - 1].className == "fighter") {
            friends++;
        } else if (!end) {
            if (getFriendly(row, col - 1, true) == 3) {
                playground[row][col - 1].className = "fighter";
                playground[row][col - 1].innerHTML = "🦸‍♂️";
                attackers.push({
                    element: playground[row][col - 1],
                    row: row,
                    col: col - 1
                })
            }
        }
    }
    if (!(col - 1 < 0) && !(row - 1 < 0)) {
        if (playground[row - 1][col - 1].className == "fighter") {
            friends++;
        } else if (!end) {
            if (getFriendly(row - 1, col - 1, true) == 3) {
                playground[row - 1][col - 1].className = "fighter";
                playground[row - 1][col - 1].innerHTML = "🦸‍♂️";
                attackers.push({
                    element: playground[row - 1][col - 1],
                    row: row - 1,
                    col: col - 1
                })
            }
        }
    }
    if (!(col + 1 > cols-1)) {
        if (playground[row][col + 1].className == "fighter") {
            friends++;
        } else if (!end) {
            if (getFriendly(row, col + 1, true) == 3) {
                playground[row][col + 1].className = "fighter";
                playground[row][col + 1].innerHTML = "🦸‍♂️";
                attackers.push({
                    element: playground[row][col + 1],
                    row: row,
                    col: col + 1
                })
            }
        }
    }
    if (!(col + 1 > cols-1) && !(row + 1 > rows-1)) {
        if (playground[row + 1][col + 1].className == "fighter") {
            friends++;
        } else if (!end) {
            if (getFriendly(row + 1, col + 1, true) == 3) {
                playground[row + 1][col + 1].className = "fighter";
                playground[row + 1][col + 1].innerHTML = "🦸‍♂️";
                attackers.push({
                    element: playground[row + 1][col + 1],
                    row: row + 1,
                    col: col + 1
                })
            }
        }
    }
    if (!(col + 1 > cols-1) && !(row - 1 < 0)) {
        if (playground[row - 1][col + 1].className == "fighter") {
            friends++;
        } else if (!end) {
            if (getFriendly(row - 1, col + 1, true) == 3) {
                playground[row - 1][col + 1].className = "fighter";
                playground[row - 1][col + 1].innerHTML = "🦸‍♂️";
                attackers.push({
                    element: playground[row - 1][col + 1],
                    row: row - 1,
                    col: col + 1
                })
            }
        }
    }
    if (!(row + 1 > rows-1) && !(col- 1 < 0)) {
        if (playground[row + 1][col - 1].className == "fighter") {
            friends++;
        } else if (!end) {
            if (getFriendly(row + 1, col - 1, true) == 3) {
                playground[row + 1][col - 1].className = "fighter";
                playground[row + 1][col - 1].innerHTML = "🦸‍♂️";
                attackers.push({
                    element: playground[row + 1][col - 1],
                    row: row + 1,
                    col: col - 1
                })
            }
        }
    }
    return friends;
}

function attackAuto() {
    if (attackers.length == 0) {document.querySelector('.message').innerHTML=`No attackers present `; return}
    console.log("Attacking auto");
    document.querySelector('.message').innerHTML=`Attacking Auto is on `;
    autoattack = setInterval(function () {
        attack();
    }, 1500)
}

function stopAuto() {
    clearInterval(autoattack);
    document.querySelector('.message').innerHTML=`Attacking Auto is Off `;
}

function removePlayers() {
    clearInterval(autoattack);
    console.log("heroes removed");
    generatePlayground();
}