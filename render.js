// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.


// var webView = document.getElementById('toggl');
// webView.addEventListener('did-finish-load', scrollElement );

// function scrollElement() {
//     var code = 'var elm = document.querySelector("body"); elm.scrollTop = 100;';
//     webView.executeJavaScript(code);
// }

onload = function() {
    console.log('done something');
    var webview = document.querySelector('webview');

    webview.addEventListener('dom-ready', function(){
        webview.executeJavaScript('__myTogglTools.alertMessage()')
    });
};

addHeader = function() {
    console.log('add');
}
