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
        margin-bottom: 3rem;
        display: flex;
        align-items: center;
        flex-direction: row;

        &__picture{
            width: 70px;
            height: 100%;
            max-width: 70px;
            max-height: 70px;

            @media screen and (max-width: 550px){
                max-width: 50px;
                max-height: 50px;
            }
        }

        &__text{
            margin-left: 2rem;
        }
    }
</style>