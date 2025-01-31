<script setup>
    defineProps(['garden']);
</script>

<template>
<div class="card">
    <div class="card-content">
        <div class="content">
            <p><strong>Name:</strong> {{ garden.garden_name }}</p>
            <p><strong>Sun Level:</strong> {{ garden.sun_level }}</p>
            <p><strong>Location:</strong> {{ garden.location }}</p>
            <p><strong>Owner:</strong> {{ garden.owner_id }}</p>
        </div>
    </div>
</div>
</template>


<style>
.card {
    margin: 5px;
}
</style>