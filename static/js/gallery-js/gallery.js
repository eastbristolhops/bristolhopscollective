"use strict";

let URL = "https://drive.google.com/uc?export=view&id=";
let sorted_links = [];
let image_links_Array = [];

function CleanImageArray(array_to_sort) {
  /* This funtion get the links from the image_links page and slices and plits them 
        in the correct url format 
    */
  for (let i = 0; i < array_to_sort.length; i++) {
    // cut the string at the 32nd caracter the split it and the first / then
    // push the new data into a sorted links array.
    let cut_string = array_to_sort[i].slice(32).split("/")[0];
    sorted_links.push(cut_string);
  }

  let tempArray = [[], [], [], []];
  let itemsPerArray = Math.ceil(sorted_links.length / tempArray.length);

  for (let line = 0; line < tempArray.length; line++) {
    // put an evan amount of links in each array
    for (let i = 0; i < itemsPerArray; i++) {
      const value = sorted_links[i + line * itemsPerArray];
      if (!value) continue;
      tempArray[line].push(value);
    }
  }
  image_links_Array = tempArray;
}
CleanImageArray(image_links);

let gallery1 = document.getElementById("column1");
let gallery2 = document.getElementById("column2");
let gallery3 = document.getElementById("column3");
let gallery4 = document.getElementById("column4");

// var elements = document.getElementsByClassName("image_column");

let build_HTML = (gallery, array_position) => {
  for (let i = 0; i < image_links_Array[array_position].length; i++) {
    let imageURL = URL + image_links_Array[array_position][i].toString();
    gallery.innerHTML += `
        <a href="#" data-id="${imageURL}" data-toggle="modal" data-target="#imageModal" class="imagebox">
        <img src="${imageURL}" alt="${imageURL}" onerror="this.src='./static/media/noimage.jpg'";class="photo"></a>`;
  }
};

build_HTML(gallery1, 0);
build_HTML(gallery2, 1);
build_HTML(gallery3, 2);
build_HTML(gallery4, 3);

// get the id from the clicked image and set that attribute for the image on the modal
$(document).on("click", ".imagebox", function () {
  let getID = $(this).data("id");
  $(".modal-body #modal_image").attr("src", getID).attr("alt", getID);
});
