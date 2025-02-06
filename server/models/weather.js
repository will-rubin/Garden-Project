// Weather model, takes in the location and returns the weather there
// Will make a fetch request to the openweathermaps api

const OWM_API_KEY = process.env.OWM_API_KEY;

// function to sanitize the location a user-supplied location string and return the longitude and latitude
async function getLatLong(location) {
    const sanitizedLocation = location.replace(/\s+/g, '+');
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${sanitizedLocation}&appid=${OWM_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return { lat: data[0].lat, lon: data[0].lon };
}

async function getWeather(location) {
    const { lat, lon } = await getLatLong(location);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OWM_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export default { getLatLong, getWeather };