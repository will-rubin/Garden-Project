<script setup lang="ts">
import { getSession, logout } from '../models/session';

let session = await getSession();

</script>

<template>
    <div class="navbar-item">
        <button class="button is-success" v-if="session.user">
            Welcome, {{ session.user.username }}!
        </button>
    </div>
    <div class="navbar-item">
        <button class="button is-danger" v-if="session.user" @click="logout">Logout</button>
    </div>

</template>

<style scoped>

</style>