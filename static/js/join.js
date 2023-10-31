"use strict";

window.addEventListener("load", function() {
    autofilluuid();

    const form = document.getElementById('order-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then((response) => response.json())
      .then((responseData) =>{
        if(responseData.result == "success"){
            console.log(responseData.result);
            form.reset();
            autofilluuid();
            // create a all good response
        }
      })
      .catch(error => {
            // create an error response
      });
    });
  });

// Generate uuid
function generateUIDWithCollisionChecking() {
    let uid = ("0000" + ((Math.random() * Math.pow(36, 4)) | 0).toString(36)).slice(-10);
    return uid;
}

// On the window load, This funtion will generate a uniqe UUID number that is unsed as an order number for the form 
const fill = document.getElementById("orderNum");
function autofilluuid(){
    fill.value = generateUIDWithCollisionChecking().toUpperCase();
    console.log( fill.value);
};

// This function will show or hide unessary form data that is not required for a certain sale
let additional = document.getElementById("Additional");
additional.addEventListener("click", function(){
    const AdditionalQTY = document.getElementById("AdditionalQTY");
    const AdditionalQTYLable = document.getElementById("AdditionalQTYLable");
    const additionl_space = document.getElementById("additionl_space");

    if(additional.value == "Dwarf" || additional.value == "Vigarouse"){
        AdditionalQTY.classList.toggle("hide");
        AdditionalQTYLable.classList.toggle("hide");
        additionl_space.classList.toggle("hide");
    }
})

// This will show or hide the help section
const help = document.getElementById("help");
let show_info = () =>{
    help.classList.toggle("hide");   
}
const unsure = document.getElementById("unsure").addEventListener("click", show_info);
