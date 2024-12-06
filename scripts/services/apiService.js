async function fetchWeatherForecast(latitude, longitude) {
    const urlWeatherAPI = `https://api.weatherapi.com/v1/forecast.json?key=${apiWeatherAPI}&q=${latitude},${longitude}&days=7`;

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