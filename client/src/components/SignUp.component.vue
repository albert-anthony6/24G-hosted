<template>
    <form @submit="handleSubmit" class="form form--signup">
        <h2 class="form__h2">Create your account!</h2>
        
        <label for="name">Name</label>
        <input v-model="name" type="text" id="name" autoComplete="off"/>

        <label for="email">Email address</label>
        <input v-model="email" type="email" id="email" autoComplete="off"/>
        
        <label for="password">Password</label>
        <input v-model="password" value={password} type="password" id="password" autoComplete="off"/>

        <label for="confirm">Confirm password</label>
        <input v-model="confirm" type="password" id="confirm" autoComplete="off"/>
        
        <button class="form__btn">Sign Up</button>
    </form>
</template>

<script>
import axios from 'axios';

    export default {
        name: 'SignUp',
        data() {
            return {
                name: null,
                email: null,
                password: null,
                confirm: null
            }
        },
        methods: {
            handleSubmit(event) {
                event.preventDefault();
                this.signup(this.name, this.email, this.password, this.confirm);
                this.name = '';
                this.email = '';
                this.password = '';
                this.confirm = '';
            },
            signup(name, email, password, passwordConfirm) {
                axios.post('/api/v1/users/signup', {
                    name,
                    email,
                    password,
                    passwordConfirm
                })
                .then(res => {
                    // console.log(res);
                    this.user = res.data.data.user;
                    // console.log('Writing to session storage...');
                    sessionStorage.setItem('user', JSON.stringify(this.user));
                    if(res.data.status === 'success') {
                        window.setTimeout(() => {
                            window.location.assign('/');
                        }, 1500)
                    }
                })
                .catch(() => alert('One of these inputs is invalid. Passwords must be at least 8 characters. Please try again!'));
            }
        },
    }
</script>

<style lang="scss">

</style>