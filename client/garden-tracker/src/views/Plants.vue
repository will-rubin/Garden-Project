<script setup lang="ts">
    import PlantCard from '../components/PlantCard.vue';
    import { type Plant, getPlants, createPlant } from '../models/plants';
    import { ref } from 'vue';
    
    const plants = ref([] as Plant[])

    await getPlants().then((data) => {
        plants.value = data;
    });
    
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
        <!-- Plant Cards -->
        <div class="column is-four-fifths">
            <div class="columns is-multiline">
                <div class="column is-one-third" v-for="plant in plants" :key="plant.id">
                    <PlantCard :plant="plant" />
                </div>
            </div>
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