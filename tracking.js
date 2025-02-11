// Load Google Ads script dynamically
var script = document.createElement("script");
script.src = "https://www.googletagmanager.com/gtag/js?id=AW-16846923210";
script.async = true;
document.head.appendChild(script);

// Ensure `gtag` is available before using it
script.onload = function() {
  console.log("Google Ads tracking script loaded.");
  
  // Define conversion tracking function only after the script loads
  window.gtag_report_conversion = function(url) {
    var callback = function () {
      if (typeof url !== 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
      'send_to': 'AW-16846923210/ppQfCMv8-JsaEMrLnuE-',
      'value': 1.0,
      'currency': 'INR',
      'event_callback': callback
    });
    return false;
  };
};
