import { MOCK_DATA } from './config.js';

export const getCurrentWeather = async (city) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));

        const data = JSON.parse(JSON.stringify(MOCK_DATA));

        data.name = city;
        return data;
    } catch(error) {
        console.error('Eroare la getCurrentWeather:', error);
        throw error;
    }
}

export const getWeatherByCoords = async (lat, long) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));

        const data = JSON.parse(JSON.stringify(MOCK_DATA));

        data.coord = {lat, long};
        return data;
    } catch(error) {
        console.error('eroare la getWeatherByCoords:', error);
        throw error;
    }
}