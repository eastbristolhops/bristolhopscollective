"use strict";

window.onload = (event) => {
    document.getElementById('overlayBox').innerHTML = "";
};


document.getElementById('overlayBox').innerHTML = `<div id="overlay"><div class="spinner" id="spinner">
<iframe onclick="none" src="https://giphy.com/embed/xT0xepcw2ZHNftb7aw" frameBorder="0" class="hopsSpinner"></iframe></div><span class="loadingText">LOADING PLEASE WAIT!</span>`;