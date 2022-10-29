"use strict";

function getDays(){
    let daysdiv = document.getElementById('avalable');
    // set the 2 dates
    let date_1 = new Date();
    let date_2 = new Date('11/21/2022');
    // get the time in milliseconds seconds between 2 dates
    let difference = date_1.getTime() - date_2.getTime();
    // convert the milliseconds to days
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    // change negative number to a positive
    let days_left = TotalDays * -1;
    daysdiv.innerHTML = days_left;
}
getDays();  

