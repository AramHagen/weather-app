const API_KEY = '';
async function fetchWeatherForecast(latitude, longitude) {
  const urlWeatherAPI = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=7`;

  try {
    const response = await fetch(urlWeatherAPI);
    if (!response.ok) {
      throw new Error('Forecast data not found!');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching forecast data:', error);
  }
}

async function fetchIcons() {
  try {
    const response = await fetch('./assets/icons.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching icons.json:', error);
    return null;
  }
}

async function getCurrentLocation() {
  if (navigator.geolocation) {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const data = await fetchWeatherForecast(latitude, longitude);
      return data;
    } catch (error) {
      console.error('Error getting geolocation:', error);
    }
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
}
