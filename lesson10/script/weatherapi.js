const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=06087b0df1c638d2543f3f92fd17fde4";

fetch(apiURL)
    .then(response => response.json())
    .then(jsObject => {
        console.log(jsObject);

        const summary = document.querySelector('#description');
        const high = document.querySelector('#high');
        const wchill = document.querySelector('#windChill');
        const humidity = document.querySelector('#humidity');
        const windSpeed = document.querySelector('#windSpeedValue');

        summary.innerHTML = jsObject.weather[0].description;
        high.innerHTML = Math.round(jsObject.main.temp_max);
        humidity.innerHTML = jsObject.main.humidity;
        windSpeed.innerHTML = jsObject.wind.speed;


        //Calculate Wind chill
        let t = high.innerHTML;
        let s = windSpeed.innerHTML;
        
        //Rounder.
        let digits = 0;
        let multiplier = Math.pow(10, digits);

        if (t <= 50 && s >= 4.8) {
            windChill = (35.74 + (0.6215 * t)) - (35.75 * s ** 0.16) + (0.4275 * t * s ** 0.16)
            windChill = Math.round(windChill * multiplier) / multiplier;
        } else {
            windChill = "n/a";

        }

        wchill.innerHTML = windChill;


    });

const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=06087b0df1c638d2543f3f92fd17fde4";

fetch(apiURL2)
    .then(response => response.json())
    .then(jsObject => {
        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(forecast);


        let day = 0;
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];



        forecast.forEach(x => {
            const d = new Date(x.dt_txt);
            const weatherIcon = document.querySelector(`#icon${day+1}`);
            const isrc = `https://openweathermap.org/img/wn/${forecast[day].weather[0].icon}.png`;

            document.getElementById(`day${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`temp${day+1}`).textContent = Math.round(x.main.temp);
            weatherIcon.setAttribute('src', isrc);
            weatherIcon.setAttribute('alt', forecast[day].weather[0].description);
            day++;
        })

    });