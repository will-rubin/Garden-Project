<script setup>
    defineProps(['plant']);
</script>

<template>
<div class="card">
    <div class="card-content">
        <div class="content">
            <p><strong>Name:</strong> {{ plant.plant_name }}</p>
            <p><strong>Type:</strong> {{ plant.plant_type }}</p>
            <p><strong>Sun Level:</strong> {{ plant.sun_level }}</p>
            <p><strong>Water Level:</strong> {{ plant.water_level }}</p>
            <p><strong>Days to Maturity:</strong> {{ plant.days_to_maturity }}</p>
            <p><strong>Edible:</strong> {{ plant.edible }}</p>
            <p><strong>Average Height:</strong> {{ plant.avg_height }} inches</p>
        </div>
    </div>
</div>
</template>


<style>
.card {
    margin: 5px;
}
</style>