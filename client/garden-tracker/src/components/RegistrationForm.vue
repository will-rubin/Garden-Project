<script setup lang="ts">
import { ref } from 'vue';
import { register } from '../models/users'

const username = ref('');
const password = ref('');
const email = ref('');
const location = ref('');

const registerUser = async() => {
    await register(username.value, password.value, email.value, location.value);
};
</script>
<template>

<!-- Section to hold register form for new users-->
    <section class="section">
        <div class="container" id="register-form">
            <h1 class="title">Register a new account!</h1>
            <form @submit.prevent="registerUser">
                <div class="field" id="username-field">
                    <label class="label">Username</label>
                    <div class="control">
                        <input class="input" type="text" v-model="username" required>
                    </div>
                </div>

                <div class="field" id="password-field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input class="input" type="password" v-model="password" required>
                    </div>
                </div>

                <div class="field" id="email-field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="email" v-model="email" required>
                    </div>
                </div>

                <div class="field" id="location-field">
                    <label class="label">Location</label>
                    <div class="control">
                        <input class="input" type="text" v-model="location" required>
                    </div>
                </div>

                <div class="field" id="submit-field">
                    <div class="control">
                        <button class="button is-primary is-large" type="submit">Register</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
<!-- Section to display user account information -->
</template>

<style scoped>
    #register-form {
        max-width: 40%;
        background-color: #26a69a;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
        border-radius:20px;
    }

    .field {
        margin: 20px;
        padding: 10px;
    }

    #submit-field {
        text-align: center;
    }
</style>