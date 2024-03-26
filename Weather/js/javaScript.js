const apiKey = "9596a96067e94fc4a1562295a8a3dfb7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const loading = document.querySelector('.loading')
const errBox = document.querySelector('.error')

// Capitalize first letter ==>
function firstLetterUpperCase(text = '') {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

// Get data from weather API
async function getData(cityName) {
    errBox.style.display = 'none'
    loading.style.display = 'flex'
    weather.style.display = 'none'
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`)

    // check city name ==>
    loading.style.display = 'none'
    if (response.status == 404) {
        weather.style.display = 'none'
        return errBox.style.display = 'block'
    }
    document.querySelector('.error').style.display = 'none'
    var data = await response.json()
    return data
}

// check weather ==>
async function checkWeather(city) {
    if (!city || /^\s*$/.test(city)) return alert('Please write something');
    let data = await getData(city)
    // city information ==>
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';
    console.log(data)
    // weather icon ==>
    weatherIcon.src = `images/${data.weather[0].main}.png`
    weather.style.display = 'block'
}

searchBtn.addEventListener('click', e => {
    e.preventDefault()
    checkWeather(searchBox.value);
})

searchBox.addEventListener('input', e => {
    if (!e.target.value){
        weather.style.display = 'none'
        errBox.style.display = 'none'
    }
})