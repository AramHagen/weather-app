const API_KEY = '8acea968e45b425c891231435242011';
async function fetchWeatherForecast(latitude, longitude) {
    const urlWeatherAPI = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=7`;

    try {
        const response = await fetch(urlWeatherAPI);
        if (!response.ok) {
            throw new Error('Forecast data not found!');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}