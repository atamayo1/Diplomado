
    window.URL = window.URL || window.webkitURL;
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    navigator.getUserMedia({
        video: true
    }, function (vid) {
        document.querySelector('video').src = window.URL.createObjectURL(vid);
    },
    // errorCallback *Opcional
    function (err) {
                console.log("Ocurrió el siguiente error: " + err);
            }
);


