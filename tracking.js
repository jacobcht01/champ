// 1️⃣ Load Google Analytics (gtag.js) in <head>
(function() {
    var gtagScript = document.createElement("script");
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-ZSHBXW4HYV";
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    // 2️⃣ Ensure gtag is initialized after script loads
    gtagScript.onload = function() {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        window.gtag = gtag; // Make gtag globally accessible

        gtag('js', new Date());
        gtag('config', 'G-ZSHBXW4HYV');
    };
})();

// 3️⃣ Load Conversion Tracking Code in <body>
document.addEventListener("DOMContentLoaded", function() {
    var conversionScript = document.createElement("script");
    conversionScript.type = "text/javascript";
    conversionScript.innerHTML = `
        function gtag_report_conversion(url) {
            var callback = function () {
                if (typeof url !== 'undefined') {
                    window.location = url;
                }
            };
            if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-16846923210/ppQfCMv8-JsaEMrLnuE-',
                    'value': 1.0,
                    'currency': 'INR',
                    'event_callback': callback
                });
            } else {
                console.error("gtag not loaded yet.");
            }
            return false;
        }
    `;
    document.body.appendChild(conversionScript);
});
