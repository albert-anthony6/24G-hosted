<template>
    <div class="videolist">
        <h2 class="videolist__title">{{video.title}}</h2>
        <img class="videolist__video" :src=video.thumb alt="thumbnail"/>
    </div>
</template>

<script>

    export default {
        name: 'VideoList',
        props: ["video"]
    }
</script>

<style lang="scss" scoped>
    .videolist{
        margin-bottom: 2rem;
        cursor: pointer;

        &__title{
            font-size: 2rem;
            font-weight: 300;
        }

        &__video{
            width: 100%;
        }

        @media screen and (max-width: 700px){
            width: 100%;

            &__video{
                width: 15rem;
            }
        }

        @media screen and (max-width: 530px){
            &__title{
                font-size: 1.4rem;
                font-weight: 600;
            }
            &__video{
                width: 12rem;
            }
        }

        @media screen and (max-width: 413px){
            &__title{
                font-size: 1rem;
                /* display: none; */
                font-weight: 600;
            }
            &__video{
                width: 8.5rem;
            }
        }
    }
</style>