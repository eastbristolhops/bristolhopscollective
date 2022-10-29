const cookieStorage = {
    // get an item from a cookie 
    getItem: (key) =>{
        // get a list of cookies and place them in a object with the cookie 
        // key being the key and value being the value assigned to each key.
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[key]
    },
    // Set a cookie in the browser with key value pairs as parameters.
    setItem: (key, value) =>{
        var d = new Date();
        d.setTime(d.getTime() + (100 * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = key + "=" + value + ";" + expires + ";path=/";
    },
  };
  // Setting the localstorage holds the consent of the user so it only shows once.
  const storageType = cookieStorage;
  const consentPropertyName = 'gdpr_consent';
  
  // When we reference the local storage, if the key name is present or a value is associated with that key name
  // then this will return false, so do not show any popups. If it returns a false value and there is no value
  // associated with with it then return true and show the popup.
  const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
  
  // If the user gives consent then this will set the consentPropertyName to True so the shouldshowPopup
  // will give us the result we need.
  const saveToStorage = () => storageType.setItem(consentPropertyName, true);
  
  window.onload = () =>{
      const consentPopup = document.getElementById('consent-popup');
      const acceptBtn = document.getElementById('accept');
  
      const acceptfn = event => {
          saveToStorage(storageType);
          consentPopup.classList.add('hidden');
      };
  
      acceptBtn.addEventListener('click', acceptfn);
  
      if (shouldShowPopup()) {
          // waits 800ms before showing the modal.
          setTimeout(() => {
             consentPopup.classList.remove('hidden'); 
          }, 500);
      }
  };