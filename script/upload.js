
// JAVASCRIPT

// Cambiar tema light - dark mode 

function day(){
    body.className='day';
    logo.src='assets/gifOF_logo.png';
  
  }
function night(){
    body.className='night';
    logo.src='assets/gifOF_logo_dark.png';
  }

  // FUNCIÓN VÍDEO

  function captureCamera(callback) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(camera) {
        callback(camera);
    }).catch(function(error) {
        console.error(error);
    });
}

let form = new FormData();
console.log(form.get('file'))


function stopRecordingCallback() {
    document.querySelector('h1').innerHTML = 'Vista previa. Guifo size: ' + bytesToSize(recorder.getBlob().size);
    image.src = URL.createObjectURL(recorder.getBlob());
form.append('file', recorder.getBlob(), 'myGif.gif');
console.log(form.get('file'))
    recorder.camera.stop();
}

var recorder; // globally accessible

function getStreamAndRecord() {
    this.disabled = true;
    captureCamera(function(camera) {
        document.querySelector('h1').innerHTML = 'Esperando al Gif Recorder para empezar...';
        recorder = RecordRTC(camera, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
            hidden: 240,
            onGifRecordingStarted: function() {
                document.querySelector('h1').innerHTML = 'Capturando tu Guifo.';
            },
            onGifPreview: function(gifURL) {
                image.src = gifURL;
            }
        });

        recorder.startRecording();

        // release camera on stopRecording
        recorder.camera = camera;

        document.getElementById('btn-stop-recording').disabled = false;
    });
};

function stopRecording() {
    this.disabled = true;
    recorder.stopRecording(stopRecordingCallback);
};

// Generando un archivo para subir (upload)

// Upload a Giphy - Upload a

var apiKey = "zLngW6Npv5ek7URDYXee7tp7lXqHIwxu";

function uploadGif() {
    fetch("https://upload.giphy.com/v1/gifs?api_key=" + apiKey, {
    method: "POST",
    body: form
})
    .then(response => {
        console.log(response.status);
        return response.json();
        
    })
    .then(data => {
        var dataId = data.data.id;
        fetch("https://api.giphy.com/v1/gifs/" + dataId + "?api_key=" + apiKey)
        .then(response => {
            return response.json();
        })
    
        .then(json => {
            console.log(json)

    
                    document.getElementById("gif-subido1").src = json.data.images.original.url;
            localStorage.setItem();
            localStorage.getItem()
          
    
    })

}
    )}

// Local Storage



// Cambios en el DOM al presionar botones

function startVideo() {
  document.getElementById("recuadro").style.display = "none";
  document.getElementById("recuadro3").style.display = "block";
}

function startRecord() {
    document.getElementById("recuadro4").style.display = "none";
    document.getElementById("recuadro5").style.display = "block";
    document.getElementById("recuadro6").style.display = "none";
}

function stopRecord() {
    document.getElementById("recuadro5").style.display = "none";
    document.getElementById("recuadro6").style.display = "block";
}

function subirGuifo() {
    document.getElementById("recuadro6").style.display = "none";
    document.getElementById("recuadro7").style.display = "block";
    document.getElementById("imagen").style.display = "none";
}




