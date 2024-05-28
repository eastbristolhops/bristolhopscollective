"use strict";

document.addEventListener("DOMContentLoaded", () => {
    $(".fade_oval").fadeIn(3000).delay(2000).fadeOut(1000);
    $(".fade_slogan").delay(6000).fadeIn(4000);
    load_chart();
});

let brewkettleyear = document.getElementById('brewkettleyear');
let d = new Date().getFullYear();
brewkettleyear.innerHTML = `${d}`

let pageNews = document.getElementById("news");
let pageEvents = document.getElementById("events_and_dates");
let dates_disclaimer = document.getElementById("dates_disclaimer");


let updateinfo = () =>{

    if(news.length > 0){
        for(let i = 0; i < news.length; i++){
            pageNews.innerHTML += `<p>${news[i]}</p>`;
        }
    }

    if(events.length > 0){
       for(let i = 0; i < events.length; i++){
            pageEvents.innerHTML += `<p>${events[i]} - ${events_dates_times[i]? events_dates_times[i] : ""}</p>`;
        }
        dates_disclaimer.innerHTML = `<p class="dates_disclaimer"><i> Dates are subject to change. For updates keep an eye on your inbox. 
        If you're not signed up to the mailing list please do so <a href="pages/subscribe.html"><strong>here</strong></a> to stay up to date with all the hoppy action!</i><p>`
    }

    if(news.length == 0 && events.length == 0){
        pageEvents.innerHTML += `<p>The Brew Kettles currently empty, pop back again soon for news of upcoming events!</p>`
    }
}

updateinfo();

const dataPointsPeople = [{ label: "2016", y: 12},{ label: "2017", y: 26},{ label: "2018", y: 27},{label: "2019", y: 32},{ label: "2020", y: 26},{label: "2021", y: 23},{ label: "2022", y: 33},{label: "2023", y: 33}]
const dataPointsYearYield = [{ label: "2016", y: 7},{ label: "2017", y: 20},{ label: "2018", y: 40.24},{label: "2019", y: 43.34},{ label: "2020", y: 32.52},{label: "2021", y: 45.45},{ label: "2022", y: 56.51},{label: "2023", y: 57.71}]

function get_totals(type){
    let number = 0;
    let array_type = [];

    if(type == "people")array_type = dataPointsPeople;
    else array_type = dataPointsYearYield;

    for (const [key, value] of Object.entries(array_type)){
        number += value["y"];
    }
    return number;
}


let total_people = document.getElementById("total-number-people");
total_people.innerHTML = `${get_totals("people")}`;

let total_hops = document.getElementById("total-number-hops");
total_hops.innerHTML = `${get_totals("hops")}`;

let charts = document.getElementById("chart-div");

function load_chart(){
    setTimeout(build_chart, 1500);
  }
  
let build_chart = () => {
    build("people-chart", dataPointsPeople, "contributers");
    build("hops-chart", dataPointsYearYield, "beer");
}