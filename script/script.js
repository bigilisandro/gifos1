

/* JavaScript */

/* API KEY */

// zLngW6Npv5ek7URDYXee7tp7lXqHIwxu

// Cambiar tema light - dark mode 



function day(){
  body.className='day';
  logo.src='assets/gifOF_logo.png';

}
function night(){
  body.className='night';
  logo.src='assets/gifOF_logo_dark.png';
}


/* Función para voler a la página anterior */

function goBack() {
    window.history.back();
  }

// Sugerencias



var giphyAPItrend = 'https://api.giphy.com/v1/gifs/trending?api_key=zLngW6Npv5ek7URDYXee7tp7lXqHIwxu&limit=24&rating=G';

    fetch(giphyAPItrend)
    .then(response => {
        return response.json();
    })

    .then(json => {
        console.log(json)

        for(i = 0; i < json.data.length; i++) {
            
            console.log(json.data[i].images.original.url);

                document.getElementById("gif1").src = json.data[0].images.original.url;
                document.getElementById("gif2").src = json.data[1].images.original.url;
                document.getElementById("gif3").src = json.data[2].images.original.url;
                document.getElementById("gif4").src = json.data[3].images.original.url;
                document.getElementById("gif5").src = json.data[4].images.original.url;
                document.getElementById("gif6").src = json.data[5].images.original.url;
                document.getElementById("gif7").src = json.data[6].images.original.url;
                document.getElementById("gif8").src = json.data[7].images.original.url;
                document.getElementById("gif9").src = json.data[8].images.original.url;
                document.getElementById("gif10").src = json.data[9].images.original.url;
                document.getElementById("gif11").src = json.data[10].images.original.url;
                document.getElementById("gif12").src = json.data[11].images.original.url;
                document.getElementById("gif13").src = json.data[12].images.original.url;
                document.getElementById("gif14").src = json.data[13].images.original.url;
                document.getElementById("gif15").src = json.data[14].images.original.url;
                document.getElementById("gif16").src = json.data[15].images.original.url;
                document.getElementById("gif17").src = json.data[16].images.original.url;
                document.getElementById("gif18").src = json.data[17].images.original.url;
                document.getElementById("gif19").src = json.data[18].images.original.url;
                document.getElementById("gif20").src = json.data[19].images.original.url;
                
                

            console.log(json.data[i].title);

              document.getElementById("gif-sugerencias-title1").innerHTML = json.data[0].title + '<img src="assets/close.svg" />';
              document.getElementById("gif-sugerencias-title2").innerHTML = json.data[1].title + '<img src="assets/close.svg" />';
              document.getElementById("gif-sugerencias-title3").innerHTML = json.data[2].title + '<img src="assets/close.svg" />';
              document.getElementById("gif-sugerencias-title4").innerHTML = json.data[3].title + '<img src="assets/close.svg" />';
        }
    })

    


// Tendencias

/*

var giphyAPIrandom = '';

    fetch(giphyAPIrandom)
    .then(response => {
        return response.json();
    })

    .then(json => {
        console.log(json)

        for(i = 0; i < json.data.length; i++) {
            
            console.log(json.data[i].images.original.url);

                document.getElementById("gif1").src = json.data[0].images.original.url;
                document.getElementById("gif2").src = json.data[1].images.original.url;
                document.getElementById("gif3").src = json.data[2].images.original.url;
                document.getElementById("gif4").src = json.data[3].images.original.url;

            console.log(json.data[i].title);

              document.getElementById("gif-sugerencias-title1").innerHTML = json.data[0].title + '<img src="assets/close.svg" />';
              document.getElementById("gif-sugerencias-title2").innerHTML = json.data[1].title + '<img src="assets/close.svg" />';
              document.getElementById("gif-sugerencias-title3").innerHTML = json.data[2].title + '<img src="assets/close.svg" />';
              document.getElementById("gif-sugerencias-title4").innerHTML = json.data[3].title + '<img src="assets/close.svg" />';
        }
    })

*/


/* Función Búsqueda */



    function getSearchResults() {

    var searchValue = document.getElementById("userSearch").value;
    
  fetch('https://api.giphy.com/v1/gifs/search?api_key=zLngW6Npv5ek7URDYXee7tp7lXqHIwxu&q=' + searchValue + '&limit=25&offset=0&rating=G&lang=en')
  
  .then((response) => {
  return response.json()
  }).then(data => {
    console.log(data);
    for(i = 0; i < data.data.length; i++) {
            
  

          document.getElementById("search").src = data.data[0].images.original.url;
          document.getElementById("search2").src = data.data[1].images.original.url;
          document.getElementById("search3").src = data.data[2].images.original.url;
          document.getElementById("search4").src = data.data[3].images.original.url;
          document.getElementById("search5").src = data.data[4].images.original.url;
          document.getElementById("search6").src = data.data[5].images.original.url;
          document.getElementById("search7").src = data.data[6].images.original.url;
          document.getElementById("search8").src = data.data[7].images.original.url;
          document.getElementById("search9").src = data.data[8].images.original.url;
          document.getElementById("search10").src = data.data[9].images.original.url;
          document.getElementById("search11").src = data.data[10].images.original.url;
          document.getElementById("search12").src = data.data[11].images.original.url;
          document.getElementById("search13").src = data.data[12].images.original.url;
          document.getElementById("search14").src = data.data[13].images.original.url;
          document.getElementById("search15").src = data.data[14].images.original.url;
          document.getElementById("search16").src = data.data[15].images.original.url;
    }

  return data
  })
  .catch((error) => {
  return error
  })

    }

    function hideResults() {
     document.getElementById("searchResults").style.display = "block";
     document.getElementById("tendencias").style.display = "none";
    }
    

  
