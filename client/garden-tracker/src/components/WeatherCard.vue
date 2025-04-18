<script setup> 
import { ref } from 'vue';
defineProps(['weather']);

</script>

<template>
    <div class="weather-card">
        <h2>Weather Information</h2>
        <div class="weather-icon">
            <img :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" :alt="weather.weather[0].description" />
            <p><strong>Condition:</strong> {{ weather.weather[0].main }} - {{ weather.weather[0].description }}</p>
        </div>
        <p><strong>Date:</strong> {{ new Date(weather.dt * 1000).toLocaleString() }}</p>
        <p><strong>Temperature:</strong> {{ (weather.temp - 273.15).toFixed(1) }}°C</p>
        <p><strong>Feels Like:</strong> {{ (weather.feels_like - 273.15).toFixed(1) }}°C</p>
        <p><strong>Pressure:</strong> {{ weather.pressure }} hPa</p>
        <p><strong>Humidity:</strong> {{ weather.humidity }}%</p>
        <p><strong>Dew Point:</strong> {{ (weather.dew_point - 273.15).toFixed(1) }}°C</p>
        <p><strong>UV Index:</strong> {{ weather.uvi }}</p>
        <p><strong>Cloud Coverage:</strong> {{ weather.clouds }}%</p>
        <p><strong>Visibility:</strong> {{ weather.visibility / 1000 }} km</p>
        <div class="wind-section">
            <p><strong>Wind Speed:</strong> {{ weather.wind_speed }} m/s</p>
            <p><strong>Wind Direction:</strong> {{ weather.wind_deg }}°</p>
            <p><strong>Wind Gust:</strong> {{ weather.wind_gust }} m/s</p>
        </div>
        
    </div>
</template>

<style>

</style>