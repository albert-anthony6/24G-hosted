<template>
    <form @submit="handleSubmit" class="form form--signin">
        <h2 class="form__h2">Log into your account</h2>
        
        <label for="email">Email address</label>
        <input v-model="email" type="email" id="email" autoComplete="off"/>
        
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" autoComplete="off"/>
        
        <button class="form__btn">Login</button>
    </form>
</template>

<script>
import axios from 'axios';

    export default {
        name: 'SignIn',
        data() {
            return {
                user: null,
                email: null,
                password: null
            }
        },
        methods: {
            handleSubmit(event) {
                event.preventDefault();
                this.login(this.email, this.password);
                this.email = '';
                this.password = '';
            },
            login(email, password) {
                axios.post('/api/v1/users/login', {
                    email,
                    password
                })
                .then(res => {
                    this.user = res.data.data.user;
                    // console.log('Writing to session storage...');
                    sessionStorage.setItem('user', JSON.stringify(this.user));
                    if(res.data.status === 'success') {
                        window.setTimeout(() => {
                            window.location.assign('/');
                        }, 1500)
                    }
                })
                .catch(err => alert(err.response.data.message));
            }
        }
    }
</script>

<style lang="scss">
    .form{
        /* &--signin{
            position: absolute;
            top: 36%;
            left: 35%;
            height: 25rem;
        }

        &--signup{
            position: absolute;
            top: 20%;
            left: 10%;
            height: 37rem;
        } */

        display: flex;
        color: #fff;
        flex-direction: column;
        margin: 0 auto;
        margin-bottom: 2rem;
        width: 30rem;
        padding: 1rem 1rem 2rem 1rem;
        line-height: 2;
        background-color: rgba(0, 0, 0, .8);

        &__h2{
            margin: 0 auto;
            font-weight: 500;
            text-transform: uppercase;
        }

        input{
            color: rgba(0, 0, 0, 0.8);
            border: none;
            padding: 1rem 1rem .3rem 1rem;
            font-size: 1.5rem;
        }

        &__btn{
            border-radius: 3px;
            font-weight: 700;
            color: #fff;
            background-color: rgb(12, 211, 247);
            cursor: pointer;
            margin-top: 2rem;
            border: none;
            font-size: 2.5rem;
            padding: 1rem;
            text-transform: uppercase;
            outline: none;
            transition: all .2s;

            &:hover{color: #000;}
        }

        @media screen and (max-width: 500px){
            width: 100vw;
            margin-bottom: 0;
        }
    }
</style>