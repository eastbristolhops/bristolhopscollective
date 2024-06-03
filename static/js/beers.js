"use strict";

window.addEventListener("load", load_chart);

let media_folder = '../static/media/beers/';
let brewery = ["New Bristol Brewery","Dawkins Ales","Dawkins Ales","Dawkins Ales","Dawkins Ales","Dawkins Ales","Dawkins Ales","Dawkins Ales"];
let beer_name = ["Home Grown","Easton Promise","Easton Promise","Easton Promise","Easton Promise","Easton Promise","Easton Promise","Easton Promise"];
let abv = ["5.0","4.4","4.4","4.4","4.4","4.4","4.5","4.3"];
let pumpclip = ['homegrown.png','EP_round2022.png', 'EP_round2021.png', 'EP_round2020.png',
                'EP_round2022.png','EP_round2018.png', 'EP_round2017.png', 'EP_round2016.png'];
let year = ['2023','2022','2021','2020','2019','2018','2017','2016'];
let recipe = [['Pale Ale Malt, Medium Caramalt, Acidulated Malt, Torrefied Wheat, Green Hop Cones, US-50 American Ale Yeast'],
['No Recipe Data'],['No Recipe Data'],['No Recipe Data'],['No Recipe Data'],['No Recipe Data'],['No Recipe Data'],['No Recipe Data']];
let hopsweight = [['57.70 Kg'],['56.51 Kg'],['45.45 Kg'],['32.52 Kg'],['43.34 Kg'],['40.24 Kg'],['20 Kg'],['7 Kg']];

let beerinfo = document.getElementById('hops_makeup_charts');
let totalbeers = document.getElementById("totalbeers").innerHTML = year.length;

const dataPointsHops = [  

  [   // 2023
      { label: "Fuggles", y: 17.93 },
      { label: "Prima donna", y: 18.98 },
      { label: "Cascade", y: 4.3 },
      { label: "Bramling +", y: 2.80 },
      { label: "Bullion", y: 13.30 },
      { label: "Chinook", y: 0.45 }
  ],
  [   // 2022
      { label: "Fuggles", y: 33.85 },
      { label: "Prima donna", y: 12.41 },
      { label: "Cascade", y: 1.20 },
      { label: "Goldings", y: 3.65 },
      { label: "Bramling +", y: 2.50 },
      { label: "Bullion", y: 2.45 },
      { label: "Other", y: 0.45 }
  ],
  [   // 2021
      { label: "Fuggles", y: 29.64 },
      { label: "Prima donna", y: 5.16 },
      { label: "Cascade", y: 2.40 },
      { label: "Goldings", y: 0.45 },
      { label: "Other", y: 7.80 }
  ],
  [   // 2020
      { label: "Fuggles", y: 16.14 },
      { label: "Prima donna", y: 5.40 },
      { label: "Cascade", y: 0.48 },
      { label: "Bramling +", y: 0.14 },
      { label: "Other", y: 10.36 }
  ],
  [   // 2019
      { label: "Fuggles", y: 31.24 },
      { label: "Prima donna", y: 4.45 },
      { label: "Goldings", y: 1.60 },
      { label: "Other", y: 5.91 }
  ],
  [   // 2018
     { label: "Fuggles", y: 21.57 },
     { label: "Prima donna", y: 10.19 },
     { label: "Other", y: 8.49 }
  ], 
  [   // 2017
    { label: "Fuggles", y: 11 },
    { label: "Prima donna", y: 7 },
    { label: "Other", y: 2}
  ], 
  [   // 2016
    { label: "Fuggles", y: 5 },
    { label: "Prima donna", y: 2 },
  ], 
 ];


for(let i = 0; i < year.length; i ++){
    beerinfo.innerHTML += `
    <div class="hops_breakdown">
      <div class="col-md-12 pump_clip_image_div">
        <img class="pump_clip" src="${media_folder}${pumpclip[i]}" alt="${pumpclip[i]} image">
      </div>
        <div class="col-md-12 beerinfodiv"> 
            <div class="beerinfo"><strong><i class="fa-solid fa-calendar-days icon"></i> :</strong> ${year[i]}</div>
            <div class="beerinfo"><strong><i class="fa-solid fa-beer-mug-empty icon"></i> :</strong> ${brewery[i]}</div>
            <div class="beerinfo"><strong><i class="fa-regular fa-id-card icon"></i> :</strong> ${beer_name[i]}</div>
            <div class="beerinfo"><strong><i class="fa-solid fa-dumbbell icon"></i> :</strong> ${abv[i]}% Abv</div>
            <div class="beerinfo"><strong><i class="fa-solid fa-seedling icon"></i> :</strong> ${hopsweight[i]} of hops</div>
            <div class="beerinfo"><strong><i class="fa-solid fa-wheat-awn icon"></i> :</strong> ${recipe[i]}</div>
        </div>
        <div class="col-md-12 chart-div-center">
          <p class="beerinfo" >Hops used by type and quantity</p>
              <div class="chartdiv loader" id="${[i]}">
            </div>
           
        </div>
  `;
}

function load_chart(){
  setTimeout(build_chart, 1000);
}

let build_chart = () => {
  for(let i = 0; i < year.length; i ++){
    build(String([i]), dataPointsHops[i], "beer");
    remove_spinner([i]);
  }
}

let remove_spinner = (id) =>{
   let remove_spinner = document.getElementById(id);
    remove_spinner.classList.remove("loader");
}

let totalweightinfo = document.getElementById("totalweightinfo").innerHTML = `${get_totals(dataPointsHops)}`;

function get_totals(dataSet){
  let total = 0;

  for(let i = 0; i < dataSet.length; i++){
      for (const [key, value] of Object.entries(dataSet[i])){
        total += value["y"];
      }
  }
  return total;
}