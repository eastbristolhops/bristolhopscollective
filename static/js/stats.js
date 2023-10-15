"use strict";

let media_folder = '../static/media/';
let brewery = ["New Bristol Brewery","Dawkins Ales","Dawkins Ales","Dawkins Ales","Dawkins Ales","Dawkins Ales","Dawkins Ales","Dawkins Ales"];
let beer_name = ["Home Grown","Easton Promise","Easton Promise","Easton Promise","Easton Promise","Easton Promise","Easton Promise","Easton Promise"];
let info = ['bd2023.png','bd2022.png', 'bd2021.png', 'bd2020.png', 'bd2019.png', 'bd2018.png','nodatachart.png','nodatachart.png'];
let abv = ["5.0","4.4","4.4","4.4","4.4","4.4","4.5","4.3"];
let pumpclip = ['homegrown.png','EP_round2022.png', 'EP_round2021.png', 'EP_round2020.png',
                'EP_round2022.png','EP_round2018.png', 'EP_round2017.png', 'EP_round2016.png'];
let year = ['Hops Variety Breakdown 2023','Hops Variety Breakdown 2022', 'Hops Variety Breakdown  2021','Hops Variety Breakdown  2020','Hops Variety Breakdown  2019',
            'Hops Variety Breakdown 2018', 'Hops Variety Breakdown 2017', 'Hops Variety Breakdown 2016'];
let recipe = ['Pale Ale Malt, Medium Caramalt, Acidulated Malt, Torrefied Wheat, Green Hop Cones, US-50 American Ale Yeast','No Recipe Data', 'No Recipe Data','No Recipe Data','No Recipe Data',
'No Recipe Data', 'No Recipe Data', 'No Recipe Data'];
let beerinfo = document.getElementById('hops_makeup_and_pump_clips');


for(let i = 0; i < year.length; i ++){
    beerinfo.innerHTML += `
    <hr color="white">
    <div class="col-sm-12"> 
        <h3 class="newsheading">${year[i]}</h3>
    </div>
    <div class="col-sm-12"> 
        <div class="newstory">Brewery: ${brewery[i]}</div>
        <div class="newstory">Name: ${beer_name[i]}</div>
        <div class="newstory">${abv[i]}% Abv</div>
    </div>
    <div class="col-sm-12"> 
        <h4 class="newstory">${recipe[i]}</h4>
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