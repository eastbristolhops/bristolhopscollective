"use strict";

class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a id="mobilelogo" href="../"><img class="logomodile"
            src="../static/media/logo/logo_green_white.jpg" alt="logo"></a></span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
          </button>
          <div class="collapse navbar-collapse logonavbar" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item nav-item-padding">
                <a class="nav-link active" aria-current="page" href="../">Home</a>
              </li>
              <li class="nav-item dropdown nav-item-padding">
              <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Us
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="nav-link dd-link" href="${pagelocation()}news.html">News</a></li>
                  <li><a class="nav-link dd-link" href="${pagelocation()}history.html">History</a></li>
                  <li><a class="nav-link dd-link" href="${pagelocation()}team.html">The Team</a></li>
                  <li><a class="nav-link dd-link" href="${pagelocation()}subscribe.html">Subscribe</a></li>
                </ul>
              </li>
              <li class="nav-item nav-item-padding">
                <a class="nav-link dd-link" href="${pagelocation()}beers.html">Beer</a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand" href="../"><img class="navbar-logo" src="../static/media/logo/logoedit.png" alt="logo"></a>
              </li>
              <li class="nav-item nav-item-padding">
              <a class="nav-link" href="${pagelocation()}wiki.html">Wiki</a>
             </li>
              <li class="nav-item nav-item-padding">
                <a class="nav-link" href="../join.html">Join Us</a>
              </li>
              <li class="nav-item nav-item-padding">
                <a class="nav-link dd-link" href="${pagelocation()}contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <a href="#" class="scrollToTop"><i class="fas fa-arrow-up scrolltotopicon"></i></a>
      </header>`
    }
}

customElements.define("special-header", SpecialHeader);

function pagelocation(){
  // Some pages are in the root directory so they can be acceses with a shorter url not containing the /pages
  if(window.location.pathname == "/index.html" || window.location.pathname == "/" || window.location.pathname == "/join.html"){
    return "pages/";
  }else{
    return "";
  }
}