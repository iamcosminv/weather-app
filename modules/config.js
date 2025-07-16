// Cum arată datele unei API meteo?
// Temperatură, umiditate, vânt, descriere...

export const MOCK_DATA = {
    main: {
        temp: 25.3,
        feels_like: 26.5,
        temp_min: 24,
        temp_max: 27,
        pressure: 1013,
        humidity: 60
    },
    weather: [
        {
            id: 800,
            main: "Clear",
            description: "Cer senin",
            icon: "01d" 
        }
    ],
    wind: {
        speed: 3.5,
        deg: 120
    },
    sys: {
        country: "RO",
        sunrise: 1658110000,
        sunset: 1658165200,
    },
    name: "Brașov"
};