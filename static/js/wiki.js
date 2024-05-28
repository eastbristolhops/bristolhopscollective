"use strict";

/* This function displays the pests sections */

function pest(pest){
    
    if (pest == 'aphids'){
        document.getElementById('pestdisplay').innerHTML = aphids;
    }
    else if (pest == 'spider'){
        document.getElementById('pestdisplay').innerHTML = spider;
    }
    else if (pest == 'sooty'){
        document.getElementById('pestdisplay').innerHTML = sooty;
    }
    else if  (pest == 'mosaic'){
        document.getElementById('pestdisplay').innerHTML = mosaic;
    }
    else if  (pest == 'vert'){
        document.getElementById('pestdisplay').innerHTML = vert;
    }
    else if  (pest == 'mildew'){
        document.getElementById('pestdisplay').innerHTML = mildew;
    }
    else if  (pest == 'nute'){
        document.getElementById('pestdisplay').innerHTML = nute;
    };
    WikiPestBehaviour();
}

/* This function scrolls the pestdislay in to view and hides the back to top button */

function WikiPestBehaviour(){
    let itemToUnfade =  document.getElementById('pestdisplay');
    unfade(itemToUnfade);
    document.getElementById('pestheading').scrollIntoView({behavior: 'smooth'});
    document.getElementById('scrollToTop').className = 'hideScrollToTop';
}

/* This function Closes the pests section and scrolls the pest buttons back to view center page 
and shows the back to top button. */

function pestclose(){
    let itemToUnfade = document.getElementById('pestdisplay');
    fade(itemToUnfade);
    document.getElementById('pestbuttons').scrollIntoView({behavior: 'smooth', block: 'center'});
    document.getElementById('scrollToTop').className = 'scrollToTop';
}

/*These functions slide the video section in and out */

function slideDown(slidedown) {
    const SlideDown = elem => elem.style.height = `${elem.scrollHeight}px`;
    SlideDown(document.getElementById(slidedown));
}

function slideUp(slideup) {
    const SlideUp = elem => elem.style.height = `${elem.Height = "0"}px`;
    SlideUp(document.getElementById(slideup));
}

//fade out
function fade(element) {
    let op = 1;  // initial opacity
    let timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

// fade in
function unfade(element) {
    let op = 0.1;  // initial opacity
    element.style.display = 'block';
    let timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 40);
}