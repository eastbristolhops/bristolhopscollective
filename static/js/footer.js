"use strict";

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="container">
                <div class="row">
                <div class="col-sm-6">
                <div class="footer-link-pos">
                        <div class="footer-headings">Contact:</div>  
                        <a class="footer-contact" href="${pagelocation()}contact.html">Contact</a>
                        <span class="spacer">|</span>
                        <a class="footer-contact" href="${pagelocation()}subscribe.html">Mailing list</a> 
                    </div>
                    <div class="footer-link-pos">
                    <a class="footer-links"
                    href="../pages/codeofconduct.html" target="_blank">Code of Conduct</a>
                    <span class="spacer">|</span>
                        <a class="footer-links"
                            href="../pages/termsofuse.html" target="_blank">Privacy Policy</a>
                        <span class="spacer">|</span>
                        <a class="footer-links"
                                href="../pages/termsofsale.html" target="_blank">Terms of Sale</a>
                            <span class="spacer">|</span>
                            <a class="footer-links"
                                href="https://www.drinkaware.co.uk/alcohol-facts/health-effects-of-alcohol/mental-health/alcoholism/"
                                target="_blank">DrinkAware </a>
                        <span class="spacer">|</span>
                        <a class="footer-links"
                            href="https://www.alcoholics-anonymous.org.uk/" target="_blank">AA</a>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="footer-headings">Lets stay connected:</div>
                    
                    <a class="footer-icon" href="https://www.facebook.com/groups/eastbristolhops" target="_blank">
                    <i class="fab fa-brands fa-facebook-f "></i></a><span class="icon-text">Facebook</span> 

                    <a class="footer-icon" href="https://twitter.com/eastbristolhops?lang=en" target="_blank">
                    <i class="fab fa-brands fa-x-twitter"></i></a><span class="icon-text">Twitter</span>

                    <a class="footer-icon" href="https://instagram.com/bristolhopscollective?igshid=MzRlODBiNWFlZA==" target="_blank">
                    <i class="fab fa-brands fa-instagram"></i></a><span class="icon-text">Instagram</span>
                </div>
                </div>

                <hr style="color: white">

                <div class="row">
                <div class="col">
                    <img class="footer-logo"
                    src="../static/media/logo/logo_green_white.jpg" alt="logo">
                    <div class="tc">
                    <div class="copyright-footer">Copyright-&copy; <span id="footeryear"></span>
                        Bristol Hops Collective </div>
                    </div>
                </div>
                </div>
            </div>
        </footer>

        <link href="${checklink()}static/fontawsome/css/fontawesome.css" rel="stylesheet" />
        <link href="${checklink()}static/fontawsome/css/brands.css" rel="stylesheet" />
        <link href="${checklink()}static/fontawsome/css/solid.css" rel="stylesheet" />`
    }
  }
  
function checklink(){
    if(window.location.pathname != "/index.html" || window.location.pathname != "/" || window.location.pathname != "/join.html"){
        return "../";
      }else{
        return "";
      }
    }

customElements.define("special-footer", SpecialFooter);

let footerdate = document.getElementById("footeryear");
let date = new Date().getFullYear();
let year0 = document.getElementById("year0");
let year1 = document.getElementById("year1");
let year2 = document.getElementById("year2");

footerdate.innerHTML = `2016-${date}`;

if(year0)year0.innerHTML = `${date}`;
if(year1)year1.innerHTML = `${date}`;
if(year2)year2.innerHTML = `${date}`;