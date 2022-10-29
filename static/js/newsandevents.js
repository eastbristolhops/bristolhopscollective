"use strict";

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
            pageEvents.innerHTML += `<p>${events[i]} - <b>${events_dates_times[i]? events_dates_times[i] : ""}</b></p>`;
        }
        dates_disclaimer.innerHTML = `<p class="dates_disclaimer"><i> Dates are subject to change. For updates keep an eye on your inbox. 
        If you're not signed up to the mailing list please do so <a href="pages/subscribe.html"><strong>here</strong></a> to stay up to date with all the hoppy action!</i><p>`
    }

    if(news.length == 0 && events.length == 0){
        pageEvents.innerHTML += `<p>The Brew Kettles currently empty, pop back again soon for news of upcoming events!</p>`
    }
}

updateinfo();