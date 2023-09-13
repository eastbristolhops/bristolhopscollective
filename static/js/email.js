
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // show spinner on page
        document.getElementById('overlayBox').innerHTML = `<div id="overlay"><div class="spinner" id="spinner">
        <iframe onclick="none" src="https://giphy.com/embed/xT0xepcw2ZHNftb7aw" frameBorder="0" class="hopsSpinner"></iframe></div><span class="loadingText">SENDING PLEASE WAIT!</span>`;
        // generate the contact number value
        this.email_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm("service_rl9pk8l", "requestForm", this)
        .then(function(response) {
            // if the response is good 
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById('overlayBox').innerHTML = "";
        document.getElementById('messageSent').innerHTML = `<span>Thank you we have recieved your Email and will be in touch soon</span>`;
        document.getElementById('contact-form').reset();
        }, 
        function(error) {
        console.log('FAILED...', error, error.text);
        document.getElementById('messageSent').innerHTML = `<span>"Something went wrong please refresh the page and try again"</span>`;
        });
    });
}