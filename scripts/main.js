const loginFormElement = document.getElementById('login-form');
const usernameElement = document.getElementById('username');
const passwordElement = document.getElementById('password');
const locationPermissionElement = document.getElementById('location-permission');
const locationCheckbox = document.getElementById('location-permission');
// const apiWeatherAPI = '8acea968e45b425c891231435242011';
// const _apiKey = 'bc80d42c1904a8f3de7a72eb7b5d0c91';

locationCheckbox.addEventListener('change', function (e) {
    e.preventDefault();
    if (this.checked) {
        console.log('this.checked');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                console.log('longitude',latitude,longitude);
                // fetchWeatherData(latitude, longitude);
                // fetchWeatherForecast(latitude, longitude);
            });
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }
});

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

loginFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const usernameValidity = checkRequiredValidation(usernameElement);
    const passwordValidity = checkRequiredValidation(passwordElement);
    const locationValidity = checkBoxValidation(locationPermissionElement);

    if (usernameValidity && passwordValidity && locationValidity) {
        resetForm()
    }
});


const resetForm = () => {
    loginFormElement.reset();
};
// const resetField = (element, initial) => {
//     handleErrorMessage(element, false);
//     element.value = initial ? initial : '';
// };
