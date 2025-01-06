<template>
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Garden Tracker</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link :to="'/account'">Account</router-link>
                </li>
                <li>
                    <router-link :to="'/plants'">Plants</router-link>
                </li>
                <li>
                    <router-link :to="'/gardens'">Gardens</router-link>
                </li>
                <li>
                    <router-link :to="'/about'">About</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router';


</script>

<style scoped>
    nav {
        background-color: #26a69a;
    }
    .brand-logo {
        font-size: 1.5em;
        margin-left: 20px;
        margin-top: 20px;
    }
    .nav-wrapper {
        padding-left: 20px;
        padding-right: 20px;
    }

    li {
        display: inline;
        margin-right: 20px;
    }

    a {
        color: white;
        text-decoration: none;
    }
    

</style>