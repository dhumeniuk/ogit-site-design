console.log("OGIT Site Design prototype script loaded.");

window.addEventListener('load', function() {
    fetch('assets/logo.svg')
        .then(response => response.text())
        .then(data => {
            document.getElementById('logo-container').innerHTML = data;
        });
});