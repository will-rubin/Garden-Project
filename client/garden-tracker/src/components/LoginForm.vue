<script setup lang="ts">
import { ref } from 'vue';
import { login } from '../models/session'

const username = ref('');
const password = ref('');

const loginUser = async() => {
    await login(username.value, password.value);
};

</script>
<template>

<!-- Section to hold register form for new users-->
    <section class="login-section">
        <div class="container" id="login-form">
            <h1 class="title">Login to your account</h1>
            <form @submit.prevent="loginUser">
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

                <div class="field" id="submit-field">
                    <div class="control">
                        <button class="button is-primary is-large" type="submit">Login</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
    <section class="register-section">
        
    </section>
<!-- Section to display user account information -->
</template>

<style scoped>
    #login-form {
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