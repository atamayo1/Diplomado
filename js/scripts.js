var cali =  {lat: 3.4372200, lng: -76.5225000};
var calledelaescopeta = {lat:3.4506574, lng:-76.53715};
var plazoletajairo = {lat:3.4549914, lng:-76.53463049999999};
var puenteortiz = {lat:3.4538599, lng:-76.53273309999997};
var laermita = {lat: 3.4538863, lng:-76.53167029999997};
var parquepoetas = {lat:3.4536948 , lng:-76.53195410000001};
var teatroisaacs = {lat:3.4532337, lng:-76.53240219999998};
var palacionacional = {lat:3.4523903, lng:-76.5320289};
var plazacayzedo = {lat:3.4518535, lng:-76.5324511};
var catedralsanpedro = {lat:3.4511829, lng:-76.53254049999998};
var iglesiasanfrancisco = {lat:3.4503327, lng:-76.53378499999997};
var museodeloro = {lat: 3.44993, lng:-76.535685};
var casaproartes = {lat: 3.4497146, lng:-76.53570200000001};
var teatromunicipal = {lat:3.4493542, lng:-76.5360819};
var centrocultural = {lat:3.4495219, lng:-76.5364262};
var iglesiamerced = {lat: 3.4506179, lng:-76.5363451};
var parquelaumbria = { lat: 3.3435907, lng: -76.54196890000003};


//var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
var iconBase = 'img/';

      function initMap() {
       
        map = new google.maps.Map(document.getElementById('map'), {
          center: calledelaescopeta,
          zoom: 17
          
        });
        // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        var markers = [
          {
            coords: calledelaescopeta,
            iconImage: iconBase + 'yellow-marker.png',
            content: 'A: Calle de la Escopeta con Realidad Aumentada mira a tus alrededores'
          },
          {
          coords: plazoletajairo,
          iconImage: iconBase + 'yellow-marker.png',
            content: 'B: Plazoleta Jairo Varela con Realidad Aumentada mira a tus alrededores'
          },
          {
            coords:  puenteortiz,
            iconImage: iconBase + 'yellow-marker.png',
            content: 'C: Puente Ortiz con Realidad Aumentada mira a tus alrededores'
          },
          {
            coords:  laermita,
            iconImage: iconBase + 'yellow-marker.png',
            content: 'D: La Ermita con Realidad Aumentada mira a tus alrededores'
          },
          {
            coords:  parquepoetas,
            iconImage: iconBase + 'yellow-marker.png',
            content: 'E: Parque de los Poetas con Realidad Aumentada mira a tus alrededores'
          },
          {
            coords:  teatroisaacs,
            iconImage: iconBase + 'yellow-marker.png',
            content: 'F: Teatro Jorge Isaacs con Realidad Aumentada mira a tus alrededores'
          },
          {
            coords:  palacionacional,
            iconImage: iconBase + 'yellow-marker.png',
            content: 'G: Palacio Nacional con Realidad Aumentada mira a tus alrededores'
          },
          {
            coords:  plazacayzedo,
            iconImage: iconBase + 'yellow-marker.png',
            content: 'H: Plaza Cayzedo con Realidad Aumentada mira a tus alrededores'
          },
          {
            coords:  catedralsanpedro,
            iconImage: iconBase + 'yellow-marker.png',
            content: 'I: Catedral San Pedro con Realidad Aumentada mira a tus alrededores'
          },
          {
            coords:  iglesiasanfrancisco,
            iconImage: iconBase + 'yellow-marker.png',
            content: 'J: Iglesia de San Francisco con Realidad Aumentada mira a tus alrededores'
          },
          {
            coords:  museodeloro,
            iconImage: iconBase + 'yellow-marker.png',
            content: 'K: Museo del Oro con Realidad Aumentada mira a tus alrededores'
          },
          {
            coords:  casaproartes,
            iconImage: iconBase + 'yellow-marker.png',
            content: 'L: Casa Proartes con Realidad Aumentada mira a tus alrededores'
          },
          {
            coords:  teatromunicipal,
            iconImage: iconBase + 'yellow-marker.png',
            content: 'M: Teatro Municipal con Realidad Aumentada mira a tus alrededores'
          },
          {
            coords:  centrocultural,
            iconImage: iconBase + 'yellow-marker.png',
            content: 'N: Centro Cultural con Realidad Aumentada mira a tus alrededores'
          },
          {
            coords:  iglesiamerced,
            iconImage: iconBase + 'yellow-marker.png',
            content: 'O: Iglesia la Merced con Realidad Aumentada mira a tus alrededores',
            
          }
        ];

        for (var i = 0; i < markers.length;i++) {
          addMarker(markers[i]);
        }

        function addMarker(props) { 
           
          var marker = new google.maps.Marker({
            position: props.coords,
            label: labels[i % labels.length],
            map: map
            //icon: props.iconImage,
            
          });
          var panorama = new google.maps.StreetViewPanorama(
            document.getElementById('pano'), {
              position: calledelaescopeta,
              pov: {
                heading: 34,
                pitch: 10
              }
            });
          map.setStreetView(panorama);
          
            markers.map(function (i) {
            return new google.maps.Marker({
              label: labels[i % labels.length],
              map: map
            });
          });
          
          if (props.iconImage) {
            marker.setIcon(props.iconImage);
          }
          if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
              content:props.content
          });
          
          }        
           
          
          marker.addListener('click', function () {
            infoWindow.open(map, marker);
          });
        }

        

        
      }

     
      