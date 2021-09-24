<template>
    <div class="title">REPERTOIRE</div>
    <div class="auth-container">
        <div class="login-container">
            <h3>Log In</h3>
            <login-form></login-form>
        </div>
        <div class="register-container">
            <h3>Register</h3>
            <register-form></register-form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '../components/auth/LoginForm.vue';
import RegisterForm from '../components/auth/RegisterForm.vue';
export default defineComponent({
    components: {
        LoginForm,
        RegisterForm,
    },
});
</script>
