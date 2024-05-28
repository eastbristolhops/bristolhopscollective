"use strict";

const consentPropertyName = 'BHC_cookie_accept';
const shouldShowPopup = () => !cookieStorage.getItem(consentPropertyName); // check yo see if cookie exists
const saveToStorage = (cookieName) => cookieStorage.setItem(cookieName, true);  // if accepted add to cookies

$(document).ready(function(){
    /*---------------------- Cookie consent ------------------------*/ 
    const consentPopup = document.getElementById('consent-popup');
    const acceptBtn = document.getElementById('accept');

    if(shouldShowPopup())consentPopup.classList.remove('hidden');              // if true hide the banner
    
    const accept_cookie = event => {
        saveToStorage(consentPropertyName);
        consentPopup.classList.add('hidden');
    };
    acceptBtn.addEventListener('click', accept_cookie);
});

const cookieStorage = {
    getItem: (key) =>{
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[key]
    },
    setItem: (key, value) =>{
        let d = new Date();
        d.setTime(d.getTime() + (100 * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = key + "=" + value + ";" + expires + ";path=/";
    },
};

class SpecialBanner extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<div id="consent-popup" class="hidden">
            <span id="consent-text">We use cookies to ensure that we give you the best experience on our website. By clicking
                    Accept, you agree to our use of cookies and <a href="pages/termsofuse.html" target="_blank"> Terms of Use</a>
                    <a class="btn btn-success" id="accept" href="#">Accept</a>
            </span>
        </div>`
    }
}
customElements.define("special-banner", SpecialBanner);