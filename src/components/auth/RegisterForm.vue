<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="username">Username </label>
            <input
                autocomplete="off"
                type="text"
                name="username"
                v-model="username.val"
            />
        </div>
        <div class="form-control">
            <label for="email">Email </label>
            <input
                autocomplete="off"
                type="email"
                name="email"
                v-model="email.val"
            />
        </div>
        <div class="form-control">
            <label for="password">Password </label>
            <input type="password" name="password" v-model="password.val" />
        </div>
        <div class="form-control">
            <label for="confirmPassword">Confirm Password </label>
            <input
                type="password"
                name="password"
                v-model="confirmPassword.val"
            />
        </div>
        <base-button class="secondarybg">GO</base-button>
    </form>
</template>

<script lang="ts">
import { register } from '@/services/userService';
import { User } from '@/types/User';
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            email: {
                val: '',
                isValid: true,
            },
            username: {
                val: '',
                isValid: true,
            },
            password: {
                val: '',
                isValid: true,
            },
            confirmPassword: {
                val: '',
                isValid: true,
            },
        };
    },
    methods: {
        async submitForm() {
            if (
                this.email.val.length === 0 ||
                this.username.val.length === 0 ||
                this.password.val.length === 0 ||
                !this.email.val.includes('@') ||
                this.password.val !== this.confirmPassword.val
            ) {
                // TODO: better error message
                alert('Invalid');
                this.email.val = '';
                this.password.val = '';
                return;
            }
            this.$store.dispatch('setGlobalLoading', true);
            await register(
                this.email.val,
                this.username.val,
                this.password.val
            );
            this.$store.dispatch('setGlobalLoading', false);
            this.$router.push('/');
        },
    },
});
</script>

<style scoped>
label {
    color: var(--accent-text-color);
}
.form-control {
    margin-bottom: 0.5rem;
}
button {
    margin-top: 1rem;
}
</style>
