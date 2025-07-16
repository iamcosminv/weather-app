/*import('./modules/config.js').then((config) => {
  console.log('MOCK_DATA:', config.MOCK_DATA)
})

import ('./modules/weather-service.js').then((service) => {
    console.time('weather-test')
    service.getCurrentWeather('Cluj').then((data) => {
        console.timeEnd('weather-test') //1000ms?
        console.log('Received data:', data)
        console.log('City updated?', data.name === 'Cluj')
    })
})

import ('./modules/ui-controller.js').then((ui) => {
    const elements = ui.elements
    console.log('Elements found:', Object.keys(elements))
})

import ('./modules/ui-controller.js').then((ui) => {
    ui.showLoading() //Apare?
    ui.showError('Test') //Apare?
})

import ('./modules/ui-controller.js').then((ui) => {
    import ('./modules/config.js').then((config) => {
        ui.displayWeather(config.MOCK_DATA) //Arata frumos?
    })
})
*/
import { elements, showLoading, hideLoading, showError, displayWeather, clearInput, getCityInput, hideError } from './modules/ui-controller.js'
import { getCurrentWeather } from './modules/weather-service.js'

const isValidCity = (city) => {
    return city.length >= 2 && /^[a-zA-ZăâîșțĂÂÎȘȚ\s-]+$/.test(city)
}

const handleSearch = async () => {
    const city = elements.cityInput.value.trim()
    console.log('City input:', city)

    if(!isValidCity(city)) {
        showError('Introdu un oraș valid!')
        return
    }
    hideError()
    showLoading()
    try {
        const data = await getCurrentWeather(city)
        hideLoading()
        displayWeather(data)
        clearInput()
    } catch (error) {
        hideLoading()
        showError('A apărut o eroare!')
        console.error(error)
    }
}

const setupEventListeners = () => {
    elements.searchBtn.addEventListener('click', (e) => {
        e.preventDefault()
        handleSearch()
    })

    elements.cityInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            e.preventDefault()
            handleSearch()
        }
    })
} 

setupEventListeners()