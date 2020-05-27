<template>
    <div class="login-signup">
        <SignIn/>
        <SignUp/>
    </div>
</template>

<script>
import SignIn from '../components/SignIn.component';
import SignUp from '../components/SignUp.component';

export default {
    name: 'LogIn',
    components: {
        SignIn,
        SignUp
    }
}
</script>

<style lang="scss" scoped>
    .login-signup{
        display: flex;
        align-items: flex-end;
        padding: 5rem 0 12rem 0;
        overflow-x: hidden;
        background-color: rgba(0, 0, 0, .9);

        @media screen and (max-width: 700px){
            flex-direction: column;
            padding: 0;
        }
    }
</style>