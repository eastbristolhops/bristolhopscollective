/* This function will user jQuery to show hide the video section into the wiki page for ph testing info */

function showvideos(){
    // this function injects the html with the videos and changes the attribute 
    // of the show videos button to hide videos.
    // It also changes the value of the button to a different name.
    slideDown('videos');
    document.getElementById('soilphheading').scrollIntoView({behavior: 'smooth'});
    document.getElementById('showvidbutton').setAttribute('onclick','hidevideos()');
    let butname = document.getElementById('showvidbutton');
    butname.value = "Hide Videos";
    butname.classList.add("vidbut"); // addes a class to the button after the js injection to move the lower margin.
};

/* This function will hide the video section on the wiki page */

function hidevideos(){
    // This function hides the videos and changes the button attribute back to showvideos onclick.
    // It also changes the value of the button to a different name
    slideUp('videos');
    document.getElementById('showvidbutton').setAttribute('onclick','showvideos()');
    let butname = document.getElementById('showvidbutton');
    butname.value = "Show Videos";
}

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
    itemToUnfade =  document.getElementById('pestdisplay');
    unfade(itemToUnfade);
    document.getElementById('pestheading').scrollIntoView({behavior: 'smooth'});
    document.getElementById('scrollToTop').className = 'hideScrollToTop';
}

/* This function Closes the pests section and scrolls the pest buttons back to view center page 
and shows the back to top button. */

function pestclose(){
    itemToUnfade = document.getElementById('pestdisplay');
    fade(itemToUnfade);
    document.getElementById('pestbuttons').scrollIntoView({behavior: 'smooth', block: 'center'});
    document.getElementById('scrollToTop').className = 'scrollToTop';
}
