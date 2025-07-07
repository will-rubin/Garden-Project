<script setup lang="ts">

import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { getSession, login } from '../models/session';
import UserBadge from './UserBadge.vue';

const loginIsVisible = ref(false);
const alertIsVisible = ref(false);

let session = await getSession();

const username = ref('');
const password = ref('');

const loginUser = async() => {
    if (!username.value || !password.value) {
        return;
    } else {
        try {
            await login(username.value, password.value);
            if (session.user) {
                loginIsVisible.value = false;
            } else {
                console.error('Login failed: No user returned');
                alertIsVisible.value = true;
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

};

</script>

<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a href="#" class="brand-logo">Garden Tracker</a>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li class="navbar-item">
                        <router-link to="/">
                            <span class="icon">
                                <font-awesome-icon icon="house" />
                            </span>
                            Home
                        </router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link :to="'/account'">
                            <span class="icon">
                                <font-awesome-icon icon="user" />
                            </span>
                            Account
                        </router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link :to="'/plants'">
                            <span class="icon">
                                <font-awesome-icon icon="leaf" />
                            </span>
                            Plants
                        </router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link :to="'/gardens'">
                            <span class="icon">
                                <font-awesome-icon icon="table-cells"/>
                            </span>
                            Gardens
                        </router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link :to="'/about'">
                            <span class="icon">
                                <font-awesome-icon icon="circle-question" />
                            </span>
                            About
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="navbar-end">
                <div class="navbar-item" v-if="session.user">
                    <UserBadge />
                </div>
                <div class="navbar-item" v-if="!session.user">
                    <button class="button is-primary" @click="loginIsVisible = !loginIsVisible">
                        <span class="icon">
                            <font-awesome-icon icon="sign-in-alt" />
                        </span>
                        <span>Login</span>
                    </button>
                </div>
                <div class="navbar-item" v-if="!session.user">
                    <button class="button is-primary">
                        <span>Register</span>
                    </button>
                </div>
            </div>
        </div>
    </nav>
    <div class="modal-overlay" v-if="loginIsVisible">
        <div class="modal-content">
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
                <div class="container" id="login-alert" v-if="alertIsVisible">
                    <div class="notification is-danger">
                        <button class="delete" @click="alertIsVisible = false"></button>
                        Invalid username or password.
                    </div>
                </div>
            </section>
        </div>
        <button class="button is-danger" @click="loginIsVisible = false">Close</button>
    </div>
</template>

<style scoped>
    nav {
        background-color: #26a69a;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
        height: 10%;
    }

    .navbar {
        min-width: 100%;
    }

    .navbar-brand a {
        font-size: 2em;
        margin: 10px;
    }
    
    li {
        display: inline-block;
        margin: 10px;
    }

    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        color: #36ffeb;
    }

    .router-link-active {
        color: #36ffeb;
        text-shadow: 1px 0 4px #36ffeb;
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 100;
    }

    .modal-content {
        top: 25%;
    }   
    
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