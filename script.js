(function() {
  'use strict';
  
  const validateButtonEl = document.querySelector('.validate-button')
  const phoneNumberInputEl = document.querySelector('.phone-number-input')
  
  function initializer(){
    validateButtonEl.addEventListener('click', validatePhoneNumber)
  }
  
  function showError(el, classToToggle, text){
    el.classList.add(classToToggle);
    el.innerHTML = text;
    setTimeout(() => {
      el.classList.remove(classToToggle)
    }, 1500)
  }
  
  function validatePhoneNumber() {
    const regexp = /^[-\s0-9]*$/;

    const countryCodeSelectEl = document.querySelector('#country-code-select'),
          errorModalEl = document.querySelector('.alert-error'),
          selectedCountryNumberLength = Number(countryCodeSelectEl.options[countryCodeSelectEl.selectedIndex].getAttribute('data-number-length'))

    const phoneNumber = countryCodeSelectEl.value.toString() + ' ' + phoneNumberInputEl.value.toString();
    if(!phoneNumberInputEl.value || !regexp.test(phoneNumberInputEl.value) 
        || phoneNumberInputEl.value.replaceAll(/[-\s]/g, '').length !== selectedCountryNumberLength){
      showError(errorModalEl, 'alert-error-show', `Incorrect validation. Number lenght has to be ${selectedCountryNumberLength}.` );
      return
    }

    console.log(phoneNumber)
  }

  window.addEventListener('DOMContentLoaded', initializer)
})()