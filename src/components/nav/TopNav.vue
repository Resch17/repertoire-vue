<template>
    <nav>
        <router-link to="/"><div class="title">REPERTOIRE</div></router-link>
        <router-link to="/"
            ><div class="nav-item">+ Add a tab</div></router-link
        >
        <router-link to="/"><div class="nav-item">Songs</div></router-link>
        <router-link to="/"><div class="nav-item">Tune</div></router-link>
        <router-link to="/"><div class="nav-item">Setlist</div></router-link>
        <div class="user-display"><span>User:</span> {{ user?.username }}</div>
        <div class="nav-item" @click="logUserOut">Log Out</div>
    </nav>
</template>

<script lang="ts">
import { logout } from '@/services/userService';
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            user: null,
        };
    },
    created() {
        this.user = this.$store.getters.getCurrentUser;
    },
    methods: {
        logUserOut() {
            logout();
            this.$router.replace('/start');
        },
    },
});
</script>

<style scoped>
nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.25rem 2rem;
    border-bottom: 4px solid var(--secondary-background-color);
}
.title {
    color: var(--accent-text-color);
    font-family: var(--heading-font);
    font-size: 3rem;
}
.nav-item {
    font-family: var(--heading-font);
    font-size: 1.8rem;
}
.nav-item:hover,
span {
    color: var(--accent-text-color);
}
span {
    margin-right: 8px;
}
</style>
