export const elements = {
    cityInput: document.querySelector('#city-input'),
    searchBtn: document.querySelector('#search-btn'),
    loading: document.querySelector('#loading'),
    error: document.querySelector('#error'),
    weatherDisplay: document.querySelector('#weather-display'),
    cityName: document.querySelector('#city-name'),
    temperature: document.querySelector('#temperature'),
    description: document.querySelector('#description'),
    humidity: document.querySelector('#humidity'),
    wind: document.querySelector('#wind'),
    sunrise: document.querySelector('#sunrise'),
    sunset: document.querySelector('#sunset'),
};

export const showLoading = () => {
    elements.loading.classList.remove('hidden');
}

export const hideLoading = () => {
    elements.loading.classList.add('hidden');
}

export const showError = (message) => {
    elements.error.textContent = message;
    elements.error.classList.remove('hidden');
}

export const hideError = () => {
    elements.error.textContent = '';
    elements.error.classList.add('hidden');
}

export const displayWeather = (data) => {
    console.log('Display weather called');
    elements.cityName.textContent = data.name;
    elements.temperature.textContent = `${data.main.temp}°C`;
    elements.description.textContent = data.weather[0].description;
    elements.humidity.textContent = `Umiditate: ${data.main.humidity}%`;
    elements.wind.textContent = `Vânt: ${(data.wind.speed * 3.6).toFixed(1)} km/h`;


//formatare rasarit si apus la ora actuala
const sunriseDate = new Date(data.sys.sunrise * 1000);
const sunsetDate = new Date(data.sys.sunset * 1000);

elements.sunrise.textContent = `Răsărit: ${sunriseDate.toLocaleTimeString()}`;
elements.sunset.textContent = `Apus: ${sunsetDate.toLocaleTimeString()}`;

elements.weatherDisplay.classList.remove('hidden');
}

export const getCityInput = () => {
    return elements.getCityInput.value.trim();
}

export const clearInput = () => {
    elements.cityInput.value = '';
}