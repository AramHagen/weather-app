const apiWeatherAPI = '8acea968e45b425c891231435242011';
async function fetchWeatherData(latitude, longitude) {
    const _apiKey = 'bc80d42c1904a8f3de7a72eb7b5d0c91'; // Replace with your OpenWeather API key
    const urlWeatherAPI = `https://api.weatherapi.com/v1/current.json?key=${apiWeatherAPI}&q=${latitude},${longitude}`;

    try {
        const response = await fetch(urlWeatherAPI);
        if (!response.ok) {
            throw new Error('Weather data not found!');
        }
        const data = await response.json();
        console.log(data);
        return data; // Return the data (you can use this to extract specific fields)
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

async function fetchWeatherForecast(latitude, longitude) {
    const urlWeatherAPI = `https://api.weatherapi.com/v1/forecast.json?key=${apiWeatherAPI}&q=${latitude},${longitude}&days=7`;

    try {
        const response = await fetch(urlWeatherAPI);
        if (!response.ok) {
            throw new Error('Forecast data not found!');
        }
        const data = await response.json();
        //   document.getElementById('forecast').innerHTML = JSON.parse(data);
        console.log(data);
        return data; // Return the forecast data (you can use this to extract specific fields)
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}