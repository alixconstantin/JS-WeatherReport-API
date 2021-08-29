// Recupère le boutton, met un event click dessus qui délenche une function de requête Ajax
document.querySelector("a.button").addEventListener("click", getTemperature); 


function getTemperature() {

// stock 
let city = prompt('Veuillez entre une ville');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=78e8c121047afa4353c2a47d4fe99711&units=metric';    
// iniatilisation de la requête
let request = new XMLHttpRequest();

// ouverture de la requête en get
request.open('GET', url);

// verification d'un retour en Json
request.responseType = 'json';

// envoie de la requête vers l'url API
request.send();

// quand la requête est chargé
request.onload = function() {

    // Si l'etat de la requête est effectué
    if(request.readyState === XMLHttpRequest.DONE) {

        // Et que le status de la requête est bien 200
        if (request.status === 200) {

            // stock la reponse Json dans une variable
            let reponse = request.response;

            // stock une saisie partiel de la réponse
            let cityDegree = reponse.main.temp;
            console.log(cityDegree);

            document.querySelector('#city').textContent=city;
            let temperature = document.querySelector('#temperature').textContent=cityDegree;

       
        }
        else {
            alert(`Je suis désolé la ville : ${city} n'est pas reconnu par la base de donnée OpenWeatherMap`);
        }


    }
}
}