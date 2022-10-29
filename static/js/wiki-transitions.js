/* Thanks to https://stackoverflow.com/questions/3795481/
javascript-slidedown-without-jquery for this information.

These functions slide the video section in and out */
function slideDown(slidedown) {
    const SlideDown = elem => elem.style.height = `${elem.scrollHeight}px`;
    SlideDown(document.getElementById(slidedown));
}

function slideUp(slideup) {
    const SlideUp = elem => elem.style.height = `${elem.Height = "0"}px`;
    SlideUp(document.getElementById(slideup));
}

/* Thanks to https://stackoverflow.com/questions/6121203/
how-to-do-fade-in-and-fade-out-with-javascript-and-css 
for this infomation, these functions fade the paest section in and out*/

//fade out
function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
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
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 40);
}