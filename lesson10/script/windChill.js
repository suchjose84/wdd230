var t = 0
var s = 0
var windChill = 0.00;

document.getElementById("highValue").textContent = t;
document.getElementById("windSpeedValue").textContent = s;

if(t <= 50 && s >= 4.8){
        windChill = (35.74 + (0.6215 * t)) - (35.75 * s**0.16) + (0.4275 * t * s**0.16)
}else{
        windChill = "n/a";
    
}

//Round off the result to two digits after the decimal.
let digits = 0;
let multiplier = Math.pow(10, digits);
windChill = Math.round(windChill * multiplier) / multiplier;

document.getElementById("windChillValue").textContent = windChill;



    



    


