<script setup>
    defineProps(['plant']);
</script>

<template>
<div class="card">
    <div class="card-header">
        <div class="card-header-title">
            <h2>{{ plant.plant_name }}</h2>
        </div>
    </div>
    <div class="card-content">
        <div class="content">
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

.card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
}
.card-header-title {
    background-color:#26a69a;
    border-radius: 5px;
    justify-content: center;
    font-size: 1.5em;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}


</style>