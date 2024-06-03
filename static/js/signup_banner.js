"use strict";
/*
    This function look to see if the consent banner has been accepted, if so then show the sihn up to mailing list banner
*/
const newsPropertyName = 'signup';

let shouldShowNewsPop = () => cookieStorage.getItem(consentPropertyName);// if the consent banner has been accespted

$(document).ready(function(){
  
    /*---------------------- signup banner ------------------------*/ 
    const newsAcceptBtn1 = document.getElementById('newsAcpt1');
    const newsAcceptBtn2 = document.getElementById('newsAcpt2');
    const newsAcceptBtn3 = document.getElementById('newsAcpt3');
   
    const acceptNews = event => {
        saveToStorage(newsPropertyName);
        console.log("herer");
    };

    let checkNewsCookie = cookieStorage.getItem(newsPropertyName);
    if (!checkNewsCookie){ 
        newsAcceptBtn1.addEventListener('click', acceptNews);
        newsAcceptBtn2.addEventListener('click', acceptNews);
        newsAcceptBtn3.addEventListener('click', acceptNews);
    }
});

$(window).scroll(function(){
    if (shouldShowNewsPop()){
        if ($(this).scrollTop() > 100) {
            if (!cookieStorage.getItem(newsPropertyName)){ 
                $("#newslettersignup").modal('show');
            }
        }   
    }
});

class SpecialSignupBanner extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<div class="modal fade" id="newslettersignup" tabindex="-1" role="dialog" aria-labelledby="newslettersignup"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="row">
                        <div class="modalimagebox">
                            <img class="modal-ebh-image" src="static/media/logo/logo_green_white.jpg" alt="bristol hops collective logo">
                        </div>
                        <h5 class="card-title">
                            Sign up to the Mailing List to receive updates about hop
                            collection dates, growers parties and year-round socials, as well as tips and tricks to
                            maximise your harvest!
                            <br>
                            <br>
                            <a class="modal-button" id="newsAcpt3"
                            href="join.html">Join Us!</a>
                        </h5>
                    </div>
                    <hr>
                        <div class="row">
                        <div class="buttons">
                            <a class="modal-button" id="newsAcpt2"
                                    href="pages/subscribe.html">Signup?</a>
                            <a type="modal-button" class="close button-move-left" data-bs-dismiss="modal" id="newsAcpt1" 
                                aria-label="Close">No Thanks!</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
}
customElements.define("special-signup-banner", SpecialSignupBanner);

