<script setup lang="ts">
    import gardenCard from '../components/gardenCard.vue';
    import { type Garden, getGardens, createGarden } from '../models/gardens';
    import { ref } from 'vue';
    
    // load garden data
    const gardens = ref([] as Garden[])

    await getGardens().then((data) => {
        gardens.value = data;
    });

    // add new garden
    const newGarden = ref({
        garden_id: 0,
        sun_level: 0,
        location: '',
        owner_id: 0,
        garden_name: ''
    });

    const submitForm = async () => {
        await createGarden(newGarden.value);
        await getGardens().then((data) => {
            gardens.value = data;
        });
    };
</script>


<template>
    <header>
        <h1 class="title">Gardens</h1>
    </header>
    <div class="columns">
        <div class="column is-one-fifth">
            <!-- garden Form -->
            <div class="garden-form">
                <details>
                    <summary>Click to add a new garden</summary>
                    <form @submit.prevent="submitForm">
                        <div class="field">
                            <label class="label">Garden Name</label>
                            <div class="control">
                            <input class="input" type="text" v-model="newGarden.garden_name" required />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Sun Level</label>
                            <div class="control">
                            <input class="input" type="number" v-model="newGarden.sun_level" required />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Location</label>
                            <div class="control">
                            <input class="input" type="text" v-model="newGarden.location" required />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Owner ID</label>
                            <div class="control">
                            <input class="input" type="number" v-model="newGarden.owner_id" required />
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                            <button class="button is-primary" type="submit">Add garden</button>
                            </div>
                        </div>
                    </form>
                </details>
            </div>
        </div>
        <!-- garden Cards -->
        <div class="column is-four-fifths">
            <div class="columns is-multiline">
                <div class="column is-one-third" v-for="garden in gardens" :key="garden.garden_id">
                    <gardenCard :garden="garden" />
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
        margin-bottom: 20px;
    }

    div.garden-form {
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