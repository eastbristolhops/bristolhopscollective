"use strict";

let footerdate = document.getElementById("footeryear");
let date = new Date().getFullYear();
let year0 = document.getElementById("year0");
let year1 = document.getElementById("year1");
let year2 = document.getElementById("year2");

footerdate.innerHTML = `2016-${date}`;

if(year0)year0.innerHTML = `${date}`;
if(year1)year1.innerHTML = `${date}`;
if(year2)year2.innerHTML = `${date}`;