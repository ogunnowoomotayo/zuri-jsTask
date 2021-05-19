function convertFahrToCelsius(fahrenheit){
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = `${fTemp + ''}` + `${fToCel.toFixed(4)}`
    return fToCel;
}
convertFahrToCelsius(fahrenheit); 