"use strict";

let total_value = 0;
let hop_type_array = ["Standard variety" , "Dwarf variety"];
let order_total = document.getElementById("Order Total");

window.addEventListener("load", function() {
    autofilluuid();  // create the initial UUID for a new order
    setOverlay("sold_out")
    const form = document.getElementById('order-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();                   // dont allow page to refresh
      setOverlay("wait");                   // set tempory overlay sating please wait
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then((response) => response.json())
      .then((responseData) =>{
        if(responseData.result == "success"){
            form.reset();                    // clear the form for another order
            autofilluuid();                  // crteate a new UUID
            setOverlay("success");           // display the success screen
        }
      })
      .catch(error => {
        setOverlay("error");                 // diplay the error screen and allow the user to referesh the page
      });
    });
  });

const send_overlay = `<span id="overlayBox"><span id="fill_info"></span></span>`;

function setOverlay(action){
  // the over lay lets the user have some interation with what is happening at any given time.
  const overlay = document.getElementById("form_overlay");
  overlay.innerHTML = send_overlay;
  const fill_info = document.getElementById("fill_info");
 

  switch(action){
    case "wait":
      // displays the spinner and please wait
      fill_info.innerHTML = `<span id="overlayBox"><div class="spinner" id="spinner">
      <iframe onclick="none" src="https://giphy.com/embed/xT0xepcw2ZHNftb7aw" frameBorder="0" class="hopsSpinner"></iframe></div><span class="loadingText fade">PLEASE WAIT!</span>`;
      break;
    case "success":
      // notifys the user that the order has been placed successfully
      fill_info.innerHTML = `<span class="reply_text">Welcome on board! <br> Your order has been submitted and <span style='color: red'>a member of 
      our team will be in touch with payment details in due course.</span> <br>
      <strong><i>Please keep an eye on your spam folder!</i></strong>
      <br><br> If you would like to place another order <a class="" onclick="reset_form()">click Here</a></span>`;
      break;
    case "error":
      // notifys the user something has gone wrong and allows the page to be refreshed
      fill_info.innerHTML = `<span class="reply_text">Oops something went wrong! <br> Click here to <a class="" onclick="refresh()">Try Again</a> <br> If this keeps happening click
      <a class="nav-link" href="../pages/contact.html">Contact Us</a></span>`;
      break;
    case "sold_out":
        // notifys the user drive has now stopped
      fill_info.innerHTML = `<span class="reply_text">We are SOLD OUT <br> For more info on when pre orders for ${date +1} will go 
        on live please <a class="" href="../pages/subscribe.html">subscribe</a> to the mailing list, but if you would like to get involved 
        checkout out our socials 
        <a href="https://www.facebook.com/groups/eastbristolhops" target="_blank"><i
                  class="fab fa-facebook-square link" aria-hidden="true"></i></a>
              <a href="https://twitter.com/eastbristolhops?lang=en" target="_blank"><i
                  class="fa-brands fa-square-x-twitter link" aria-hidden="true"></i></a>
              <a href="https://instagram.com/bristolhopscollective?igshid=MzRlODBiNWFlZA=="
               target="_blank"><i class="fab fa-instagram-square link" aria-hidden="true"></i></a> for events and updates!</span>`;
        break;
    default:
      // clears any overlay from the from alloqing the user to make another order
      overlay.innerHTML = ``;
      fill_info.innerHTML = ``;
      total_value = 0;
      order_total.innerHTML = parseFloat(total_value).toFixed(2);
  }
}

const reset_form = () =>{
  // remove the overlay so user can send another form.
  setOverlay("default");
}

const refresh = () =>{
  // Reload the page if the form fails to send.
  location.reload();
} 

function generateUUID() {
    // Generate unique order number used for the order
    let uid = ("0000" + ((Math.random() * Math.pow(36, 4)) | 0).toString(36)).slice(-10);
    return uid;
}

const fill = document.getElementById("orderNum");
function autofilluuid(){
  // On the window load, This funtion will generate a uniqe UUID number that is unsed as an order number for the form 
    fill.value = generateUUID().toUpperCase();
};


let additional = document.getElementById("Additional");
const additionalQTY = document.getElementById("AdditionalQTY");

const help = document.getElementById("help");
const show_info = () =>{
  // This will show or hide the help section
  help.classList.toggle("hide");   
}
const unsure = document.getElementById("unsure").addEventListener("click", show_info);

// Update total values on the form
const form_click = document.getElementById("order-form").addEventListener("click", update_values);
const form_click_mobile = document.getElementById("order-form").addEventListener("touchend", update_values);

function update_values(){
  // Update totals order value and text in relevent places
  let hop_pack_qty = document.getElementById("hopPackQTY").value;
  let packtype = document.getElementById("hopPackType").value;
  additional.value;
  additionalQTY.value;
  let pack_sub_total = 0;
  let additional_sub_total = 0;
  
  if(packtype != "Select"){
    pack_sub_total = hop_pack_qty * pack_price;
  }
  
  additional_sub_total = additionalQTY.value * extra_hop;

  total_value = pack_sub_total + additional_sub_total;
  order_total.innerHTML = parseFloat(total_value).toFixed(2);
}