const phoneInput = document.querySelector("#phone");

const iti = window.intlTelInput(phoneInput, {
  initialCountry: "auto",
  separateDialCode: true,
  geoIpLookup: function (callback) {
    fetch("https://ipapi.co/json")
      .then(res => res.json())
      .then(data => callback(data.country_code))
      .catch(() => callback("gb"));
  },
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});