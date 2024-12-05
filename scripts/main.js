const loginFormElement = document.getElementById('login-form');
const usernameElement = document.getElementById('username');
const passwordElement = document.getElementById('password');
const locationPermissionElement = document.getElementById('location-permission');
const loadingElement = document.getElementById('loader-container');
const loginContainerElement = document.getElementById('login-container');
const weatherContainerElement = document.getElementById('weather-container');
const showPasswordElement = document.getElementById('show-password');
const eyeIcon = document.getElementById('eye-icon');
const weeklyContainerElement = document.getElementById('weekly-forecast-container');
let data;

const handleErrorMessage = (element, isShow) => {
    let errorElement = [...element.parentElement.children].find((x) =>
        x.classList.contains('error')
    );
    if (!errorElement) {
        errorElement = [...element.children].find((x) =>
            x.classList.contains('error'));
    }
    if (isShow) {
        element.parentElement.classList.add('invalid');
        errorElement.classList.remove('hidden');
    } else {
        errorElement.classList.add('hidden');
        element.parentElement.classList.remove('invalid');
    }
};
const checkRequiredValidation = (element) => {
    if (element.value.trim().length < 1) {
        handleErrorMessage(element, true);
        return false;
    } else {
        handleErrorMessage(element, false);
        return true;
    }
};
const checkBoxValidation = (element) => {
    if (!element.checked) {
        handleErrorMessage(element.parentElement.nextElementSibling, true);
        return false;
    } else {
        handleErrorMessage(element.parentElement.nextElementSibling, false);
        return true;
    }
}

showPasswordElement.addEventListener('click', () => {
    passwordElement.type = passwordElement.type === 'password' ? 'text' : 'password';
    eyeIcon.classList.toggle('fa-eye');
    eyeIcon.classList.toggle('fa-eye-slash');
})

loginFormElement.addEventListener('submit', async (event) => {
    event.preventDefault();
    const usernameValidity = checkRequiredValidation(usernameElement);
    const passwordValidity = checkRequiredValidation(passwordElement);
    const locationValidity = checkBoxValidation(locationPermissionElement);

    if (usernameValidity && passwordValidity && locationValidity) {
        loadingElement.classList.remove('hidden');
        data = await getCurrentLocation();
        if (data) {
            await showCurrentWeatherInfo();
            await showWeeklyForecast();

            loginContainerElement.classList.add('hidden');
            loadingElement.classList.add('hidden');
            weatherContainerElement.classList.remove('hidden');
        }
        resetForm();
    }
});

const resetForm = () => {
    loginFormElement.reset();
};

async function showCurrentWeatherInfo() {
    const cityNameElm = document.getElementById('city-name');
    const tempFElm = document.getElementById('temp-f');
    const weatherConditionElm = document.getElementById('weather-condition');
    const maxTempElm = document.getElementById('max-temp');
    const lowTempElm = document.getElementById('low-temp');

    cityNameElm.innerText = data.location.name;
    tempFElm.innerText = `${data.current.temp_f}°`;
    weatherConditionElm.innerText = data.current.condition.text;
    maxTempElm.innerText = `${data.forecast.forecastday[0].day.maxtemp_f}°`;
    lowTempElm.innerText = `${data.forecast.forecastday[0].day.mintemp_f}°`;

    // loginContainerElement.classList.add('hidden');
    // loadingElement.classList.add('hidden');
    // weatherContainerElement.classList.remove('hidden');
}

async function showWeeklyForecast() {
    const todayAbbreviation = getDayAbbreviation(new Date());
    for (const forecast of data.forecast.forecastday) {
        const item = document.createElement('div');
        item.classList.add('w-16', 'h-40', 'py-4', 'text-white', 'border', 'border-white/20', 'rounded-[30px]', 'bg-blueGemOP', 'gap-2.5', 'items-center', 'flex', 'flex-col', 'justify-around');
        const icon = await getCorrectIcon(forecast.day.condition);
        const dayAbbreviation = getDayAbbreviation(forecast.date); // Get the abbreviation for the forecast day
        if (dayAbbreviation === todayAbbreviation) {
            item.classList.replace('bg-blueGemOP', 'bg-blueGem'); // Change background to 'bg-blueGem' for today's forecast
        }
        item.innerHTML = `
      <span class="font-semibold">${dayAbbreviation}</span>
                                <img src="${icon}">
                                <span class="text-lg">${forecast.day.avgtemp_f}°</span>
    `;
        weeklyContainerElement.appendChild(item);
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
            console.log('Latitude:', latitude, 'Longitude:', longitude);

            const data = await fetchWeatherForecast(latitude, longitude); // Wait for data
            console.log('Weather Data:', data);
            return data;
        } catch (error) {
            console.error('Error getting geolocation:', error);
        }
    } else {
        console.error('Geolocation is not supported by this browser.');
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
        console.error("Error fetching icons.json:", error);
        return null;
    }
}

async function getCorrectIcon(apiData) {
    const iconsData = await fetchIcons();
    if (!iconsData) {
        console.error("Failed to load icons data");
        return;
    }

    const isDay = apiData.icon.includes('/day/');
    const match = iconsData.find(item => item.code == apiData.code);

    if (match) {
        const correctIcon = isDay ? match.icons[0] : match.icons[1];
        return correctIcon;
    } else {
        console.error("No matching icon found for code:", apiData.condition.code);
        return null;
    }
}

function getDayAbbreviation(dateString) {
    const date = new Date(dateString);
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];  // Array of abbreviated weekdays
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}
