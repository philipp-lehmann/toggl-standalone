__myTogglTools={
    alertMessage: function() {
        let loc = window.location.href
        if (loc.indexOf('login') !== -1 ) {
            var frame = document.getElementsByClassName("css-223lsr")[0];
            frame.style.cssText = "display: block; position: absolute; top: 0; bottom: 0; width: 100%; height: 100%; background-color: #2C1338; z-index: 9999999";
            var form = document.getElementsByClassName("css-1ou4x0t")[0];
            form.style.cssText = "transform: translateY(60px);";
            var form = document.getElementsByClassName("css-10l8hfx")[0];
            form.style.cssText = "display: none;";
        } else {
            var form = document.getElementsByClassName("css-xohggt")[0];
            form.style.cssText = "display: none;";
        }
    }
}
