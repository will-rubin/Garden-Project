<script setup lang="ts">

import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { session as sessionModel } from '../models/session';
import LoginForm from './LoginForm.vue';

const loginIsVisible = ref(false);

const session = ref(sessionModel);

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
                    <!-- Logout button and welcome message for user -->
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
                    <button class="button is-primary is-inverted">
                        <span>Register</span>
                    </button>
            
                </div>
            </div>
        </div>
    </nav>
    <div class="modal-overlay" v-if="loginIsVisible" @click="loginIsVisible = false">
        <div class="modal-content">
            <login-form />
        </div>
    </div>
</template>

<style scoped>
    nav {
        background-color: #26a69a;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    }

    .navbar {
        min-width: 100%;
    }

    .navbar-brand a {
        font-size: 2em;
        margin-left: 20px;
        margin-top: 10px;
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
</style>