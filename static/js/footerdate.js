"use strict";

let footerdate = document.getElementById("footeryear");
let date = new Date().getFullYear();

footerdate.innerHTML = `2016-${date}`;