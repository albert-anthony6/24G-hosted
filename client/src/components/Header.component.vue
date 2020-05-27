<template>
    <header class="nav">
        <router-link class="nav__left" to="/">
            <img src='../assets/24g_logo.svg' class="nav__logo" alt="24G Logo">
            <h1 class="nav__h1">Video Player</h1>
        </router-link>

        <ul v-if="!user" class="nav__list">
            <li class="nav__item">
                <a class="nav__link" href="https://24g.com" target="_blank" rel="noopener noreferrer" style="color: orange;">24G.com</a>
            </li>
            <li class="nav__item">
                <router-link class="nav__link" to="/login">Log In</router-link>
            </li>
            <li class="nav__item">
                <router-link class="nav__link nav__link--active" to="/login">Sign Up</router-link>
            </li>
        </ul>

        <ul v-else class="nav__list">
            <li class="nav__item">
                <a class="nav__link" href="https://24g.com" target="_blank" rel="noopener noreferrer" style="color: orange;">24G.com</a>
            </li>
            <li class="nav__item" @click="logout">
                <router-link class="nav__link nav__link--active" to="/">Sign Out</router-link>
            </li>
        </ul>

    </header>
</template>

<script>
import axios from 'axios';

    export default {
        name: 'Header',
        props: ["user"],
        methods: {
            async logout() {
                try{
                    const res = await axios({
                        method: 'GET',
                        url: 'http://localhost:8000/api/v1/users/logout'
                    });
                    // console.log(res);
                    if (res.data.status === 'success') {
                        location.reload(true);
                        sessionStorage.setItem('user', JSON.stringify(''));
                    }
                } catch(err) {
                    alert(err.response.data.message);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .nav{
        background-color: #333;
        width: 100vw;
        height: 13rem;
        padding: 5rem 4rem 2rem 4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__left{
            height: 13rem;
            display: flex;
            text-decoration: none;
            align-items: center;
        }

        &__logo{
            height: 45%;
        }

        &__h1{
            font-weight: 300;
            margin-left: 2rem;
            color: #fff;
            text-transform: uppercase;
        }

        &__list{
            list-style: none;
            display: flex;       
        }

        &__item{
            &:not(:first-child){
                margin-left: 5rem;
            }

            font-weight: 700;
        }

        &__link{
            font-size: 2rem;    
            color: #fff;
            text-decoration: none;

            &--active{
                background-color: #fff;
                color: rgba(0, 0, 0, .7);
                border-radius: 1px;
                padding: .5rem 1.3rem .5rem 1.3rem;
                transition: all .2s;

                &:hover{
                    color: #000;
                }
            }
        }

        @media screen and (max-width: 900px){
            padding: 5rem 1.5rem 2rem 1.5rem;

            &__item{
                &:not(:first-child){
                    margin-left: 2rem;
                }
            }
        }

        @media screen and (max-width: 700px){
            flex-direction: column;
            height: 25rem;
            padding: 7rem 0 2rem 0;

            &__left{
                flex-direction: column;
            }
        }
    }
</style>