<template>
    <div class="alerts">
        <p v-if="!user" class="alerts__text"><span class="alerts--welcome">Welcome,</span> Albert</p>
        <p v-else class="alerts__text alerts__text--welcome">Welcome, {{user.name}}</p>
    </div>
</template>

<script>

    export default {
        name: 'Alerts',
        props: ["user"]
    }
</script>

<style lang="scss" scoped>
    .alerts{
        /* display: none; */
        /* display: inline-block; */
        background-color: rgb(10, 132, 231);
        color: #fff;
        padding: 1rem 2rem 1rem 2rem;
        width: 100vw;
        position: absolute;
        top: 0; 
        left: 0;
        z-index: 999;
        animation: showAlert .5s;

        &--welcome{
            font-weight: 300;
        }

        &__text{
            font-weight: 600;
            font-size: 1.5rem;
        }

        @keyframes showAlert {
            from{
                transform: translateY(-50px);
            }
            to {
                transform: translateY(0);
            }
        }
    }
</style>