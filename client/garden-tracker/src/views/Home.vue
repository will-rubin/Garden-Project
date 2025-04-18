<script setup>
import GardenCard from '../components/GardenCard.vue';
import WeatherCard from '../components/WeatherCard.vue';

// check the session to see if the user is logged in, and if so load the gardens and weather data based on user's location
import { ref } from 'vue';
import { getSession } from '../models/session';
import { getGardensByUser } from '../models/gardens';
const gardens = ref([]);
const weather = ref(null);

const loadData = async () => {
    const session = await getSession();
    if (session && session.user) {
    }
};

loadData();
</script>

<template>
    <div class="home">
        <h1>Home</h1>
        <p>Welcome to the Garden Tracker app!</p>
    </div>

    <div class="columns">
        <div class="column is-one-third">
            <WeatherCard :weather="weather" />
        </div>
        <div class="column is-two-thirds">
            <GardenCard v-for="garden in gardens" :key="garden.garden_id" :garden="garden" />
        </div>
    </div>

</template>

<style>
    .home {
        padding: 20px;
    }
    h1 {
        font-size: 2em;
    }
    p {
        font-size: 1.5em;
    }

</style>