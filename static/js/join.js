"use strict";

let fill = document.getElementById("orderNum");
let additional = document.getElementById("Additional");
additional.addEventListener("click", display_qty);

window.onload = autofilluuid();
/* Generate uuid */
function generateUIDWithCollisionChecking() {
    let uid = ("0000" + ((Math.random() * Math.pow(36, 4)) | 0).toString(36)).slice(-10);
    return uid;
}

/* On the window load, This funtion will generate a uniqe UUID number that is unsed as an order number for the form */ 
function autofilluuid(){
    fill.value = generateUIDWithCollisionChecking().toUpperCase();
    console.log( fill.value);
};

function display_qty(){
    let AdditionalQTY = document.getElementById("AdditionalQTY");
    let AdditionalQTYLable = document.getElementById("AdditionalQTYLable");
    let additionl_space = document.getElementById("additionl_space");

    if(additional.value == "Dwarf" || additional.value == "Vigarouse"){
        AdditionalQTY.classList.toggle("hide");
        AdditionalQTYLable.classList.toggle("hide");
        additionl_space.classList.toggle("hide");
    }
}

let help = document.getElementById("help");
let show_info = () =>{
    help.classList.toggle("hide");   
}
let unsure = document.getElementById("unsure").addEventListener("click", show_info);
