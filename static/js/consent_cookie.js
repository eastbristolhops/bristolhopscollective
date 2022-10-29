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

const consentPropertyName = 'gdpr_consent';
const newsPropertyName = 'signup';
const shouldShowPopup = () => !cookieStorage.getItem(consentPropertyName);
let shouldShowNewsPop = () => cookieStorage.getItem(consentPropertyName);
const saveToStorage = (cookieName) => cookieStorage.setItem(cookieName, true);

window.onload = () =>{
    const consentPopup = document.getElementById('consent-popup');
    const acceptBtn = document.getElementById('accept');
    const newsAcceptBtn1 = document.getElementById('newsAcpt1');
    const newsAcceptBtn2 = document.getElementById('newsAcpt2');

    const acceptfn = event => {
        saveToStorage(consentPropertyName);
        consentPopup.classList.add('hidden');
    };
    acceptBtn.addEventListener('click', acceptfn);

    if (shouldShowPopup()) {
        setTimeout(() => {
            consentPopup.classList.remove('hidden'); 
        }, 500);
    }
    
    const acceptNews = event => {
        saveToStorage(newsPropertyName);
    };

    let checkNewsCookie = cookieStorage.getItem(newsPropertyName);
    if (!checkNewsCookie){ 
        newsAcceptBtn1.addEventListener('click', acceptNews);
        newsAcceptBtn2.addEventListener('click', acceptNews);
    }
};


$(window).scroll(function(){
if (shouldShowNewsPop()){
    if ($(this).scrollTop() > 100) {
        let checkNewsCookie = cookieStorage.getItem(newsPropertyName);
        if (!checkNewsCookie){ 
            $("#newslettersignup").modal('show');
        }
    }   
}});
