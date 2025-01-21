<script setup>
    defineProps(['plant']);
</script>

<template>
<div class="card">
    <div class="card-image">
        <figure class="image is-4by3">
            <img :src="plant.imageUrl" alt="Plant image">
        </figure>
    </div>
    <div class="card-content">
        <div class="media">
            <div class="media-content">
                <p class="title is-4">{{ plant.name }}</p>
                <p class="subtitle is-6">{{ plant.species }}</p>
            </div>
        </div>
    </div>
</div>
</template>


<style>
.card {
    margin: 5px;
}
</style>