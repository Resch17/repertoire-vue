<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="email">Email </label>
            <input type="email" name="email" v-model="email.val" />
        </div>
        <div class="form-control">
            <label for="password">Password </label>
            <input type="password" name="password" v-model="password.val" />
        </div>
        <button>Submit</button>
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
            }

            this.loading = true;
            await login(this.email.val, this.password.val);
            this.loading = false;
            this.$router.push('/');
        },
    },
});
</script>
