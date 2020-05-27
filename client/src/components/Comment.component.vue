<template>
    <div class="comment">
        <img class="comment__picture" :src=comment.user.photo alt="user">
        <div class="comment__text">
            <h4>{{comment.user.name}}</h4>
            <p>{{comment.comment}}</p>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Comment',
        props: ["comment"]
    }
</script>

<style lang="scss" scoped>
    .comment{
        /* background-color: red; */
        margin-bottom: 3rem;
        display: flex;

        &__picture{
            width: 7%;

            @media screen and (max-width: 550px){
                width: 10%;
            }
        }

        &__text{
            margin-left: 2rem;
        }
    }
</style>