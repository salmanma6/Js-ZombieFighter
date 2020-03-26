function zombieRadar(rowIndex, cellIndex) {
    //Checks surrounding cells to determine number of highlighted neighbors
    'use strict';
    let row = rowIndex;
    let col = cellIndex;
    zCount = 0;
    if (!(row - 1 < 0)) {
        if (rows[row - 1].cells[col].className === "live") {
            zcount++;
        }
    }
    if (!(row + 1 > totalRows - 1)) {
        if (rows[row + 1].cells[col].className === "live") {
            zcount++;
        }
    }
    if (!(col - 1 < 0)) {
        if (rows[row].cells[col - 1].className === "live") {
            zcount++;
        }
    }
    if (!(col - 1 < 0) && !(row - 1 < 0)) {
        if (rows[row - 1].cells[col - 1].className === "live") {
            zcount++;
        }
    }
    if (!(col + 1 > totalColumns - 1)) {
        if (rows[row].cells[col + 1].className === "live") {
            zcount++;
        }
    }
    if (!(col + 1 > totalColumns - 1) && !(row + 1 > totalRows - 1)) {
        if (rows[row + 1].cells[col + 1].className === "live") {
            zcount++;
        }
    }
    if (!(col + 1 > totalColumns - 1) && !(row - 1 < 0)) {
        if (rows[row - 1].cells[col + 1].className === "live") {
            zcount++;
        }
    }
    if (!(row + 1 > totalRows - 1) && !(col - 1 < 0)) {
        if (rows[row + 1].cells[col - 1].className === "live") {
            zcount++;
        }
    }
    console.log("zCount is: " + zCount);
    return zcount;
}




var data = {
    teams: [{
            name: "FC Barcelona",
            code: "FCB"
        },
        {
            name: "Juventus",
            code: "JV"
        },
        {
            name: "Real Madrid",
            code: "RM"
        }

    ],
    elements: [{
            first_name: "Messi",
            second_name: "",
            web_name: "",
            team_code: "FCB"
        },
        {
            first_name: "Suarez",
            second_name: "",
            web_name: "",
            team_code: "FCB"
        },
        {
            first_name: "Ronaldo",
            second_name: "CB",
            web_name: "",
            team_code: "JV"
        },
        {
            first_name: "Paulo",
            second_name: "",
            web_name: "",
            team_code: "JV"
        },
        {
            first_name: "Karim Benzema",
            second_name: "",
            web_name: "",
            team_code: "RM"
        },
        {
            first_name: "Gareth Bale",
            second_name: "",
            web_name: "",
            team_code: "RM"
        },

    ]
};



let tab_url = '{"https://www.google.com/search?ei=UFd7XvKqG9DwaIauhLgB&q=integrate+discord+chat+in+atom&oq=integrate+discord+chat+in+atom&gs_l=psy-ab.3..0j0i22i30l3j0i22i10i30j0i22i30j0i22i10i30j0i22i30l3.205903.213924..214423...0.4..0.509.1961.0j1j0j1j2j1......0....1..gws-wiz.......0i71j0i67j0i131j0i131i67j0i10.DB2bC6vf4pE&ved=0ahUKEwjykr3I2LXoAhVQOBoKHQYXARcQ4dUDCAs&uact=5":{"title":"","text":"","ranking_word":{},"a":[],"img":[],"html":""},';
let scraping = {
    "title": "",
    "text": "",
    "ranking_word": {},
    "a": [],
    "img": [],
    "html": ""
};

console.log(JSON.stringify(br));

let br = {
    "https://www.google.com/search?ei=UFd7XvKqG9DwaIauhLgB&q=integrate+discord+chat+in+atom&oq=integrate+discord+chat+in+atom&gs_l=psy-ab.3..0j0i22i30l3j0i22i10i30j0i22i30j0i22i10i30j0i22i30l3.205903.213924..214423...0.4..0.509.1961.0j1j0j1j2j1......0....1..gws-wiz.......0i71j0i67j0i131j0i131i67j0i10.DB2bC6vf4pE&ved=0ahUKEwjykr3I2LXoAhVQOBoKHQYXARcQ4dUDCAs&uact=5": {
        "title": "",
        "text": "",
        "ranking_word": {},
        "a": [],
        "img": [],
        "html": ""
    }
}













let tab_url = '{"https://www.google.com/search?ei=UFd7XvKqG9DwaIauhLgB&q=integrate+discord+chat+in+atom&oq=integrate+discord+chat+in+atom&gs_l=psy-ab.3..0j0i22i30l3j0i22i10i30j0i22i30j0i22i10i30j0i22i30l3.205903.213924..214423...0.4..0.509.1961.0j1j0j1j2j1......0....1..gws-wiz.......0i71j0i67j0i131j0i131i67j0i10.DB2bC6vf4pE&ved=0ahUKEwjykr3I2LXoAhVQOBoKHQYXARcQ4dUDCAs&uact=5":{"title":"","text":"","ranking_word":{},"a":[],"img":[],"html":""},';
let scraping = {
                "title": "",
                "text": "",
                "ranking_word": {},
                "a": [],
                "img": [],
                "html": ""
};
console.log(JSON.parse(tab_url + JSON.stringify(scraping)+"}"));