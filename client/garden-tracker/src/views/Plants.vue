<script setup>
    import PlantCard from '../components/PlantCard.vue';
    import { getPlants, createPlant } from '../models/plants.ts';
    import { ref } from 'vue';
    // fake plant data to test display
    const plants = ref([
        getPlants().then((response) => response.data
        .map((plant) => ({
            ...plant,
            imageUrl: plant.imageUrl || 'https://via.placeholder.com/150'
        })))
    ]);   
</script>


<template>
    <header>
        <h1 class="title">Plants</h1>
    </header>
    <div class="columns">
        <div class="column is-one-fifth">
            <div class="plant-form">
            </div>
        </div>
        <div class="column is-four-fifths">
        </div>
    </div>
</template>

<style>
    h1.title {
        font-size: 2em;
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: center;
        color: white;
    }

    div.plant-form {
        padding: 20px;
        background-color: #26a69a;
        border-radius: 5px;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    }

    label.label {
        color: white;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    }

    button.is-primary {
        color: white;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    }
</style>