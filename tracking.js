// 1️⃣ Insert Google Tag Manager script inside <head>
(function() {
    var gtmScript = document.createElement("script");
    gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PN32VHXR');`;
    document.head.appendChild(gtmScript);
})();

// 2️⃣ Insert Google Tag Manager noscript inside <body>
document.addEventListener("DOMContentLoaded", function() {
    var gtmNoScript = document.createElement("noscript");
    gtmNoScript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PN32VHXR"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.insertBefore(gtmNoScript, document.body.firstChild);
});
