"use strict";
let media_folder = '../static/media/';
let info = ['bd2022.png', 'bd2021.png', 'bd2020.png', 'bd2019.png', 'bd2018.png','nodatachart.png','nodatachart.png'];
let pumpclip = ['EP_round2022.png', 'EP_round2022.png', 'EP_round2022.png',
                'EP_round2022.png','EP_round2018.png', 'EP_round2017.png', 'EP_round2016.png'];
let year = ['Hops Variety Breakdown 2022', 'Hops Variety Breakdown  2021','Hops Variety Breakdown  2020','Hops Variety Breakdown  2019',
            'Hops Variety Breakdown 2018', 'Hops Variety Breakdown 2017', 'Hops Variety Breakdown 2016']
let beerinfo = document.getElementById('hops_makeup_and_pump_clips');

for(let i = 0; i < year.length; i ++){
    beerinfo.innerHTML += `
    <hr color="white">
    <div class="col-sm-12"> 
        <h3 class="newsheading">${year[i]}</h3>
    </div>
    <div class="row hops_breakdown">
        <div class="col-md-6 pump_clip_image_div">
                <img class="pump_clip" src="${media_folder}${pumpclip[i]}" alt="${pumpclip[i]} image">
        </div>
        <div class="col-md-6 stat_image_div">
                <img  class="stat_image" src="${media_folder}${info[i]}" alt="${info[i]} image">
        </div>
    </div>`;
}