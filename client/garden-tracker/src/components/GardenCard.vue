<script setup>
    import { ref } from 'vue';

    defineProps(['garden']);

    let isToggled = ref(false);
    
</script>

<template>
<div class="card">
    <header class="card-header">
        <p class="card-header-title">
            {{ garden.garden_name }}
        </p>
    </header>
    <div class="card-content">
        <div class="content">
            <p><strong>Sun Level:</strong> {{ garden.sun_level }}</p>
            <p><strong>Location:</strong> {{ garden.location }}</p>
        </div>
        <div class="dropdown" :class="{ 'is-active': isToggled }">
            <div class="dropdown-trigger">
                <button class="button" @click="isToggled = !isToggled" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>Plants</span>
                    <span class="icon is-small">
                        <i class="fa-angle-up"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <h3>pingus</h3>
                    <h4>bingus</h4>
                </div>
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