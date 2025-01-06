<script>
    import PlantCard from '../components/PlantCard.vue';
    // fake plant data to test display
    const plants = [
        {
            id: 1,
            name: 'Rose',
            species: 'Rosa',
            description: 'A beautiful red rose.',
            imageUrl: 'https://example.com/rose.jpg'
        },
        {
            id: 2,
            name: 'Tulip',
            species: 'Tulipa',
            description: 'A vibrant yellow tulip.',
            imageUrl: 'https://example.com/tulip.jpg'
        },
        {
            id: 3,
            name: 'Sunflower',
            species: 'Helianthus',
            description: 'A tall sunflower with a large head.',
            imageUrl: 'https://example.com/sunflower.jpg'
        }
    ];
</script>

<template>
    <header>
        <h1 class="title">Plants</h1>
    </header>
    <div class="grid">
        <PlantCard v-for="plant in plants" :key="plant.id" :plant="plant" />
    </div>
</template>

<style>
    
</style>