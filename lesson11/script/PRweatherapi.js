const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=06087b0df1c638d2543f3f92fd17fde4";
const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=06087b0df1c638d2543f3f92fd17fde4";
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// fetch(apiURL)
//     .then(response => response.json())
//     .then(jsObject => {

//         const summary = document.querySelector('#description');
//         const high = document.querySelector('#highValue');
//         const wchill = document.querySelector('#windChillValue');
//         const humidity = document.querySelector('#humidity');
//         const windSpeed = document.querySelector('#windSpeedValue');

//         summary.innerHTML = jsObject.weather[0].description;
//         high.innerHTML = jsObject.main.temp_max;
//         humidity.innerHTML = jsObject.main.humidity;
//         windSpeed.innerHTML = jsObject.wind.speed;


//         //Calculate Wind chill
//         let t = high.innerHTML;
//         let s = windSpeed.innerHTML;

//         //Rounder.
//         let digits = 0;
//         let multiplier = Math.pow(10, digits);

//         if (t <= 50 && s >= 3) {
//             windChill = (35.74 + (0.6215 * t)) - (35.75 * s ** 0.16) + (0.4275 * t * s ** 0.16)
//             windChill = (Math.round(windChill * multiplier) / multiplier).toString();
//         } else {
//             windChill = "n/a";

//         }

//         wchill.innerHTML = windChill + '&#8457';


//     });

async function fetchData1() {
    try {
        const response = await fetch(apiURL);
        const jsObject = await response.json();
        
        const summary = document.querySelector('#description');
        const high = document.querySelector('#highValue');
        const wchill = document.querySelector('#windChillValue');
        const humidity = document.querySelector('#humidity');
        const windSpeed = document.querySelector('#windSpeedValue');

        summary.innerHTML = jsObject.weather[0].description;
        high.innerHTML = jsObject.main.temp_max;
        humidity.innerHTML = jsObject.main.humidity;
        windSpeed.innerHTML = jsObject.wind.speed;

        // Calculate Wind chill
        let t = parseFloat(high.innerHTML);
        let s = parseFloat(windSpeed.innerHTML);

        let windChill = "n/a"; // Initialize windChill variable

        if (t <= 50 && s >= 3) {
            windChill = (35.74 + (0.6215 * t)) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
            windChill = Math.round(windChill); // Round the windChill value
        }

        wchill.innerHTML = windChill + '&#8457';
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData1();




// fetch(apiURL2)
//     .then(response => response.json())
//     .then(jsObject => {
//         const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
//         let day = 0;
//         const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//         forecast.forEach(x => {
//             const d = new Date(x.dt_txt);
//             const weatherIcon = document.querySelector(`#icon${day+1}`);
//             const isrc = `https://openweathermap.org/img/wn/${forecast[day].weather[0].icon}.png`;

//             document.getElementById(`day${day+1}`).textContent = weekdays[d.getDay()];
//             document.getElementById(`temp${day+1}`).textContent = Math.round(x.main.temp);
//             weatherIcon.setAttribute('src', isrc);
//             weatherIcon.setAttribute('alt', forecast[day].weather[0].description);
//             day++;
//         })

//     });


// const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// async function fetchData2() {
//     try {
//         const response = await fetch(apiURL2);
//         const jsObject = await response.json();
        
//         const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
//         let day = 0;
//         const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//         forecast.forEach(x => {
//             const d = new Date(x.dt_txt);
//             const weatherIcon = document.querySelector(`#icon${day + 1}`);
//             const isrc = `https://openweathermap.org/img/wn/${x.weather[0].icon}.png`;

//             document.getElementById(`day${day + 1}`).textContent = weekdays[d.getDay()];
//             document.getElementById(`temp${day + 1}`).textContent = Math.round(x.main.temp);
//             weatherIcon.setAttribute('src', isrc);
//             weatherIcon.setAttribute('alt', x.weather[0].description);
//             day++;
//         });
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// fetchData2();


// fetch(requestURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (jsonObject) {
//         const towns = jsonObject['towns'];
//         const town = towns[5];
//         let eventImages = ["images/11PRcreek.jpg", "images/11PRfestival.jpg", "images/11PRfreedom.jpg"];
        
//         for (let i = 0; i < town.events.length; i++) {

//             let card = document.createElement('article');
//             let p = document.createElement('p');
//             let img = document.createElement('img');


//             p.innerHTML = town.events[i];
//             img.setAttribute('src', eventImages[i]);
//             img.setAttribute('alt', 'townImage');
//             card.appendChild(p);
//             card.appendChild(img);


//             document.querySelector('.card').appendChild(card);

//         }

//     });

// async function fetchData2() {
//     try {
//         const response = await fetch(apiURL2);
//         const jsObject = await response.json();
        
//         const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
//         const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//         for (const x of forecast) {
//             const d = new Date(x.dt_txt);
//             const weatherIcon = document.querySelector(`#icon${day + 1}`);
//             const isrc = `https://openweathermap.org/img/wn/${x.weather[0].icon}.png`;

//             document.getElementById(`day${day + 1}`).textContent = weekdays[d.getDay()];
//             document.getElementById(`temp${day + 1}`).textContent = Math.round(x.main.temp);
//             weatherIcon.setAttribute('src', isrc);
//             weatherIcon.setAttribute('alt', x.weather[0].description);
//         }
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// fetchData2();

// async function fetchData2() {
//     try {
//         const response = await fetch(apiURL2);
//         const jsObject = await response.json();
        
//         const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
//         const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//         let day = 0;

//         for (const x of forecast) {
//             const d = new Date(x.dt_txt);
//             const weatherIcon = document.querySelector(`#icon${day + 1}`);
//             const isrc = `https://openweathermap.org/img/wn/${x.weather[0].icon}.png`;

//             document.getElementById(`day${day + 1}`).textContent = weekdays[d.getDay()];
//             document.getElementById(`temp${day + 1}`).textContent = Math.round(x.main.temp);

//             // Use await to asynchronously set attributes
//             await new Promise((resolve, reject) => {
//                 weatherIcon.onload = resolve;
//                 weatherIcon.onerror = reject;
//                 weatherIcon.src = isrc;
//             });

//             weatherIcon.setAttribute('alt', x.weather[0].description);
//             day++;
//         }
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// fetchData2();

async function fetchData2() {
    try {
        const response = await fetch(apiURL2);
        const jsObject = await response.json();
        
        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let day = 0;

        for (const x of forecast) {
            const d = new Date(x.dt_txt);
            const weatherIcon = document.querySelector(`#icon${day + 1}`);
            const isrc = `https://openweathermap.org/img/wn/${x.weather[0].icon}.png`;

            document.getElementById(`day${day + 1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`temp${day + 1}`).textContent = Math.round(x.main.temp);

            // Load the image asynchronously
            await new Promise((resolve, reject) => {
                weatherIcon.onload = resolve; // Resolve the promise when the image is loaded
                weatherIcon.onerror = reject; // Reject the promise if there's an error loading the image
                weatherIcon.src = isrc; // Set the src attribute of the image
            });

            // Once the image is loaded, set the alt attribute
            weatherIcon.setAttribute('alt', x.weather[0].description);
            day++;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData2();

async function fetchData3() {
    try {
        const response = await fetch(requestURL);
        const jsonObject = await response.json();
        
        const towns = jsonObject['towns'];
        const town = towns[5];
        let eventImages = ["images/11PRcreek.jpg", "images/11PRfestival.jpg", "images/11PRfreedom.jpg"];
        
        for (let i = 0; i < town.events.length; i++) {
            let card = document.createElement('article');
            let p = document.createElement('p');
            let img = document.createElement('img');

            p.innerHTML = town.events[i];
            img.setAttribute('src', eventImages[i]);
            img.setAttribute('alt', 'townImage');
            card.appendChild(p);
            card.appendChild(img);

            document.querySelector('.card').appendChild(card);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData3();
