<template>
    <div id="mainApp">
        <div class="global-spinner" v-if="globalLoading">
            <scale-loader
                color="#f73859"
                height="375px"
                width="45px"
                margin="30px"
            ></scale-loader>
        </div>
        <div v-else>
            <top-nav v-if="getCurrentUser"></top-nav>
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import TopNav from './components/nav/TopNav.vue';
export default defineComponent({
    components: { TopNav },
    computed: {
        ...mapGetters(['getCurrentUser']),
        globalLoading() {
            return this.$store.getters.globalLoading;
        },
    },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Acme&family=Carter+One&display=swap');

:root {
    --body-font: 'Acme', sans-serif;
    --heading-font: 'Carter One', cursive;
    /* Standard Colors */
    --background-color: #283149;
    --secondary-background-color: #404b69;
    --primary-text-color: #dbedf3;
    --accent-text-color: #f73859;
    --accent-drop-shadow: 0px 4px 4px var(--accent-text-color);
}

#mainApp {
    max-width: 100vw;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.6;
}

h1,
h2,
h3,
h4 {
    font-weight: 400;
    font-family: var(--heading-font);
}

body {
    background-color: var(--background-color);
    color: var(--primary-text-color);
    font-family: var(--body-font);
}

a {
    text-decoration: none;
    color: inherit;
}

.text-center {
    text-align: center;
}

.isHidden {
    display: none;
}

.opacity-none {
    opacity: 0%;
}

.form-control {
    display: flex;
    flex-direction: column;
}
.form-control label {
    padding-left: 0.75rem;
}
.form-control input {
    height: 35px;
    width: 300px;
    background-color: var(--primary-text-color);
    border: none;
    outline: none;
    padding-left: 9px;
    font-family: var(--body-font);
    font-size: 18px;
    color: var(--secondary-background-color);
    border-radius: 5px;
    margin: 0 auto;
}
.global-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-top: 12em;
    transform: rotate(90deg);
}
</style>
