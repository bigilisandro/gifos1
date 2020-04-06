
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

  function getStreamAndRecord() {
      navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
      height: { max: 480 }
      }
      })
      .then(function(camera) {
      video.srcObject = camera;
      video.play()
      }
      )}



  
    /* function captureCamera(callback) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(camera) {
            callback(camera);
        }).catch(function(error) {
            console.error(error);
        });
    }
    */
    
    function stopRecordingCallback() {
        video.srcObject = URL.createObjectURL(recorder.getBlob());
        recorder.camera.stop();
        recorder.destroy();
        recorder = null;
    }
    
    var recorder; // globally accessible
    
    function getStreamAndRecord2() {
        this.disabled = true;
        getStreamAndRecord(function(camera) {
            document.querySelector('h1').innerHTML = 'Waiting for Gif Recorder to start...';
            recorder = RecordRTC(camera, {
                type: 'gif',
                frameRate: 1,
                quality: 10,
                width: 360,
                hidden: 240,
                onGifRecordingStarted: function() {
                    document.querySelector('h1').innerHTML = 'Gif recording started.';
                },
                onGifPreview: function(gifURL) {
                    image.src = gifURL;
                },
              
            });
            
          
    
            recorder.startRecording();
        
            // release camera on stopRecording
            recorder.camera = camera;
    
            document.getElementById('btn-stop-recording').disabled = false;
        });
    };
    
    function stopRecord() {
        this.disabled = true;
        recorder.stopRecording(stopRecordingCallback);
    };
/*
  let form = new FormData();
  form.append('file', recorder.getBlob(), 'myGif.gif');
  console.log(form.get('file'));
*/

// Cambios en el DOM al presionar botones

function startVideo() {
  document.getElementById("recuadro").style.display = "none";
  document.getElementById("recuadro3").style.display = "block";
}




