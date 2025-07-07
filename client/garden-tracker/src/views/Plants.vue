<script setup lang="ts">
    import PlantCard from '../components/PlantCard.vue';
    import { type Plant, getPlants, createPlant, seachPlantsByName } from '../models/plants';
    import { ref } from 'vue';
    import { getSession } from '../models/session';
    
    // load session
    const session = await getSession();

    // load plant data
    const plants = ref([] as Plant[])

    await getPlants().then((data) => {
        plants.value = data;
    });

    // add new plant
    const newPlant = ref({
        plant_name: '',
        plant_type: '',
        sun_level: 0,
        water_level: 0,
        days_to_maturity: 0,
        edible: '',
        avg_height: 0,
        uploader_id: session.user ? session.user.user_id : 0
    });

    const submitForm = async () => {
        await createPlant(
            newPlant.value.plant_name,
            newPlant.value.plant_type,
            newPlant.value.sun_level,
            newPlant.value.water_level,
            newPlant.value.days_to_maturity,
            newPlant.value.edible,
            newPlant.value.avg_height,
            newPlant.value.uploader_id
        );
        await getPlants().then((data) => {
            plants.value = data;
        });
    };

    // search for a plant
    const searchPlantName = ref('');
    const searchPlants = async () => {
        if (searchPlantName.value === '') {
            await getPlants().then((data) => {
                plants.value = data;
            });
            return;
        }
        await seachPlantsByName(searchPlantName.value).then((data) => {
            if (data.length === 0) {
                alert('No results matched');
            } else {
                plants.value = data;
            }
        });
    };


</script>


<template>
    <header>
        <h1 class="title">Plants</h1>
    </header>
    <div class="columns">
        <div class="column is-one-fifth">
            <!-- Search bar for plants -->
            <div class="search-form">
                <div class="field">
                    <label class="label">Search</label>
                    <div class="control">
                        <input class="input" type="text" v-model="searchPlantName" @keyup.enter="searchPlants" placeholder="Search for a plant" />
                    </div>
                </div>
            </div>
            <!-- Plant Form -->
            <div class="plant-form" v-if="session.user">
                <details>
                    <summary>Add a new plant</summary>
                    <form @submit.prevent="submitForm">
                        <div class="field">
                            <label class="label">Plant Name</label>
                            <div class="control">
                            <input class="input" type="text" v-model="newPlant.plant_name" required />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Plant Type</label>
                            <div class="control">
                            <input class="input" type="text" v-model="newPlant.plant_type" required />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Sun Level</label>
                            <div class="control">
                            <input class="input" type="number" v-model="newPlant.sun_level" required />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Water Level</label>
                            <div class="control">
                            <input class="input" type="number" v-model="newPlant.water_level" required />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Days to Maturity</label>
                            <div class="control">
                            <input class="input" type="number" v-model="newPlant.days_to_maturity" required />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Edible</label>
                            <div class="control">
                            <input class="input" type="text" v-model="newPlant.edible" required />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Average Height</label>
                            <div class="control">
                            <input class="input" type="number" v-model="newPlant.avg_height" required />
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                            <button class="button is-primary" type="submit">Add Plant</button>
                            </div>
                        </div>
                    </form>
                </details>
            </div>
        </div>
        <!-- Plant Cards -->
        <div class="column is-four-fifths">
            <div class="columns is-multiline">
                <div class="column is-one-third" v-for="plant in plants" :key="plant.plant_id">
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
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    }

    div.search-form {
        padding: 20px;
        background-color: #26a69a;
        border-radius: 5px;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
        margin: 20px;
    }

    div.plant-form {
        padding: 20px;
        margin: 20px;
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

    summary {
        color: white;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
        cursor: pointer;
    }

    summary:hover {
        text-decoration: underline;
        color: #36ffeb;
    }
</style>