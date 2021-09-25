<template>
    <form @submit.prevent="submitForm">
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
        <base-button>GO</base-button>
    </form>
</template>

<script lang="ts">
import { getUserFirebase, login } from '@/services/userService';
import { User } from '@/types/User';
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            email: {
                val: '',
                isValid: true,
            },
            password: {
                val: '',
                isValid: true,
            },
            loading: false,
        };
    },
    methods: {
        async submitForm() {
            if (
                this.email.val.length === 0 ||
                this.password.val.length === 0 ||
                !this.email.val.includes('@')
            ) {
                // TODO: better error message
                alert('Invalid');
                this.email.val = '';
                this.password.val = '';
                return;
            }

            this.$store.dispatch('setGlobalLoading', true);
            await login(this.email.val, this.password.val);
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
