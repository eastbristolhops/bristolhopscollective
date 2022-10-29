"use strict";

let brewkettleyear = document.getElementById('brewkettleyear');
let footerdate = document.getElementById("footeryear");
let date = new Date().getFullYear();

brewkettleyear.innerHTML = `${date}`
footerdate.innerHTML = `2016-${date}`;

