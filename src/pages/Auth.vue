<template>
    <div class="auth-container">
        <h1 class="title">REPERTOIRE</h1>
        <div class="form-container">
            <div class="login-container">
                <h3>Log In</h3>
                <login-form></login-form>
            </div>
            <div class="register-container">
                <h3>Register</h3>
                <register-form></register-form>
            </div>
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

<style scoped>
h3 {
    text-align: center;
    font-size: 2rem;
}
.title {
    color: var(--accent-text-color);
    font-size: 4rem;
    margin-bottom: 3rem;
    margin-top: 10%;
}
.auth-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;
}
.form-container {
    display: flex;
    justify-content: center;
}
.form-container > div > form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.login-container {
    padding-right: 2rem;
    border-right: 2px solid var(--accent-text-color);
}
.register-container {
    padding-left: 2rem;
    border-left: 2px solid var(--accent-text-color);
}
@media only screen and (max-width: 700px) {
    h3 {
        font-size: 1.25rem;
    }
    .auth-container {
        max-width: 100%;
    }
    .form-container {
        flex-wrap: wrap;
    }
    .login-container,
    .register-container {
        padding: 0;
        border: 0;
    }
    .login-container {
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        border-bottom: 4px solid var(--accent-text-color);
    }
}
</style>
