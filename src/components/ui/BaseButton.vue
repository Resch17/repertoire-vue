<template>
    <button v-if="!link" :class="[`${style}`]">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="[`${style}`]">
        <slot></slot>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        link: {
            type: Boolean,
            required: false,
            default: false,
        },
        to: {
            type: String,
            required: false,
            default: '/',
        },
        style: {
            type: String,
            required: false,
        },
    },
    computed: {
        classStyle() {
            return this.style;
        },
    },
});
</script>

<style scoped>
button,
a {
    border: none;
    outline: none;
    font-family: var(--heading-font);
    border-radius: 7px;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    font-size: 1.5rem;
    min-width: 6rem;
}

.primarybg {
    background-color: var(--background-color);
    color: var(--primary-text-color);
}
.primarybg:hover {
    background-color: var(--primary-text-color);
    color: var(--background-color);
}
.secondarybg {
    background-color: var(--secondary-background-color);
    color: var(--primary-text-color);
}
.secondarybg:hover {
    background-color: var(--primary-text-color);
    color: var(--secondary-background-color);
}
.primarytext {
    background-color: var(--primary-text-color);
    color: var(--accent-text-color);
}
.accenttext {
    background-color: var(--accent-text-color);
    color: var(--background-color);
}
.accenttext:hover {
    background-color: var(--primary-text-color);
    color: var(--accent-text-color);
}
</style>
