function eventListeners() {
  const loginFormElement = document.getElementById('login-form');
  const usernameElement = document.getElementById('username');
  const passwordElement = document.getElementById('password');
  const locationPermissionElement = document.getElementById(
    'location-permission'
  );
  const loadingElement = document.getElementById('loader-container');
  const loginContainerElement = document.getElementById('login-container');
  const weatherContainerElement = document.getElementById('weather-container');
  const showPasswordElement = document.getElementById('show-password');
  const eyeIcon = document.getElementById('eye-icon');
  const weeklyContainerElement = document.getElementById(
    'weekly-forecast-container'
  );

  const handleErrorMessage = (element, isShow) => {
    let errorElement = [...element.parentElement.children].find((x) =>
      x.classList.contains('error')
    );
    if (!errorElement) {
      errorElement = [...element.children].find((x) =>
        x.classList.contains('error')
      );
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
  };

  if (showPasswordElement) {
    showPasswordElement.addEventListener('click', () => {
      passwordElement.type =
        passwordElement.type === 'password' ? 'text' : 'password';
      eyeIcon.classList.toggle('fa-eye');
      eyeIcon.classList.toggle('fa-eye-slash');
    });
  }

  if (loginFormElement) {
    loginFormElement.addEventListener('submit', async (event) => {
      event.preventDefault();
      const usernameValidity = checkRequiredValidation(usernameElement);
      const passwordValidity = checkRequiredValidation(passwordElement);
      const locationValidity = checkBoxValidation(locationPermissionElement);

      if (usernameValidity && passwordValidity && locationValidity) {
        loadingElement.classList.remove('hidden');
        const data = await getCurrentLocation();
        if (data) {
          const weatherCondition = new Weather(data);
          await weatherCondition.init();
          await showCurrentWeatherInfo(weatherCondition);
          await showWeeklyForecast(weatherCondition);

          loginContainerElement.classList.add('hidden');
          loadingElement.classList.add('hidden');
          weatherContainerElement.classList.remove('hidden');
        }
        resetForm();
      }
    });
  }

  const resetForm = () => {
    loginFormElement.reset();
  };

  async function showCurrentWeatherInfo(weatherCondition) {
    const cityNameElm = document.getElementById('city-name');
    const tempFElm = document.getElementById('temp-f');
    const weatherConditionElm = document.getElementById('weather-condition');
    const maxTempElm = document.getElementById('max-temp');
    const lowTempElm = document.getElementById('low-temp');

    cityNameElm.innerText = weatherCondition.city;
    tempFElm.innerText = `${weatherCondition.tempF}°`;
    weatherConditionElm.innerText = weatherCondition.weatherCondition;
    maxTempElm.innerText = `${weatherCondition.maxTemp}°`;
    lowTempElm.innerText = `${weatherCondition.lowTemp}°`;
  }

  async function showWeeklyForecast(weatherCondition) {
    const todayAbbreviation = getDayAbbreviation(new Date());
    for (const forecast of weatherCondition.forecastDetails) {
      const item = document.createElement('div');
      item.classList.add(
        'w-16',
        'h-40',
        'py-4',
        'text-white',
        'border',
        'border-white/20',
        'rounded-[30px]',
        'bg-blueGemOP',
        'gap-2.5',
        'items-center',
        'flex',
        'flex-col',
        'justify-around',
        'flex-shrink-0'
      );
      if (forecast.dayAbbreviation === todayAbbreviation) {
        item.classList.replace('bg-blueGemOP', 'bg-blueGem'); // Change background to 'bg-blueGem' for today's forecast
      }
      item.innerHTML = `
      <span class="font-semibold">${forecast.dayAbbreviation}</span>
                                <img src="${forecast.icon}">
                                <span class="text-lg">${forecast.avgtemp}°</span>
    `;
      weeklyContainerElement.appendChild(item);
    }
  }
}
class Weather {
  forecastDetails = [];
  constructor(data) {
    this.city = data.location.name;
    this.tempF = data.current.temp_f;
    this.weatherCondition = data.current.condition.text;
    this.maxTemp = data.forecast.forecastday[0].day.maxtemp_f;
    this.lowTemp = data.forecast.forecastday[0].day.mintemp_f;
    this.forecastday = data.forecast.forecastday;
  }

  async prepareForecastDetails() {
    for (const forecast of this.forecastday) {
      const icon = await getCorrectIcon(forecast.day.condition);
      const dayAbbreviation = getDayAbbreviation(forecast.date);
      this.forecastDetails.push({
        dayAbbreviation: dayAbbreviation,
        icon: icon,
        avgtemp: forecast.day.avgtemp_f,
      });
    }
  }

  async init() {
    await this.prepareForecastDetails();
  }
}

(function () {
  // Make sure to run eventListeners when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function () {
    eventListeners();
  });
})();
