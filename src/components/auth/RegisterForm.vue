<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="username">Username </label>
            <input type="text" name="username" v-model="username.val" />
        </div>
        <div class="form-control">
            <label for="email">Email </label>
            <input type="email" name="email" v-model="email.val" />
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
        <button>Submit</button>
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
            loading: false,
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
            }
            this.loading = true;
            await register(
                this.email.val,
                this.username.val,
                this.password.val
            );
            this.loading = false;
            this.$router.push('/');
        },
    },
});
</script>
