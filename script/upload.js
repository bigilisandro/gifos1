
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

  // Obtener vídeo

  function getStreamAndRecord() {
    navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
    height: { max: 480 }
    }
    })
    .then(function(stream) {
      console.log(video);
    video.srcObject = stream;
    video.play()
    }
    )
  }

  // Objeto Recorder

  recorder = RecordRTC(stream, {
    type: 'gif',
    frameRate: 1,
    quality: 10,
    width: 360,
    hidden: 240,
    onGifRecordingStarted: function() {
    console.log('started')
    },
    });

  // Grabar / Detener grabación

  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(async function(stream) {
    let recorder = RecordRTC(stream, {
        type: 'video'
    });
    recorder.startRecording();

    const sleep = m => new Promise(r => setTimeout(r, m));
    await sleep(3000);

    recorder.stopRecording(function() {
        let blob = recorder.getBlob();
        invokeSaveAsDialog(blob);
    });
});


/*
  let form = new FormData();
  form.append('file', recorder.getBlob(), 'myGif.gif');
  console.log(form.get('file'));
*/