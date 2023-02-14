const convertButton = document.getElementById('convert');
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');
const resultDiv = document.getElementById('result');

convertButton.addEventListener('click', function() {
    if (celsiusInput.value) {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 1.8) + 32;
        const kelvin = celsius + 273.15;
        fahrenheitInput.value = fahrenheit.toFixed(2);
        kelvinInput.value = kelvin.toFixed(2);
    } else if (fahrenheitInput.value) {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = (fahrenheit - 32) / 1.8;
        const kelvin = celsius + 273.15;
        celsiusInput.value = celsius.toFixed(2);
        kelvinInput.value = kelvin.toFixed(2);
    } else if (kelvinInput.value) {
        const kelvin = parseFloat(kelvinInput.value);
        const celsius = kelvin - 273.15;
        const fahrenheit = (celsius * 1.8) + 32;
        celsiusInput.value = celsius.toFixed(2);
        fahrenheitInput.value = fahrenheit.toFixed(2);
    } else {
        alert('Please enter a temperature to convert.');
    }
});
