<template>
    <div class="home">
        <SelectedVideo class="home__left" v-bind:user="user" v-bind:video="videos[mainVid]" v-on:newcomment="updateVideos"/>

        <div class="home__right">
            <div @click="changeVids(videos.indexOf(video))" class="home__videolist" v-bind:key="video._id" v-for="video in videos">
                <VideoItem v-bind:video="video"/>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import SelectedVideo from '../components/SelectedVideo.component';
    import VideoItem from '../components/VideoItem.component';
    axios.defaults.withCredentials = true;

    export default {
        name: 'Home',
        components: {
            SelectedVideo,
            VideoItem
        },
        data() {
            return {
                videos: [],
                user: null,
                mainVid: 0
            }
        },
        methods: {
            updateVideos(){
                sessionStorage.setItem('homeVideos', '');
                this.fetchData();
            },
            changeVids(idx){
                this.mainVid = idx;
            },
            fetchData(){
                if (sessionStorage.homeVideos) {
                    // console.log('Getting from session storage...');
                    this.videos = JSON.parse(sessionStorage.homeVideos);
                } else {
                    // console.log('Getting from API and setting res to session storage...');
                    axios.get('/api/v1/videos')
                    .then(res => {
                        sessionStorage.setItem('homeVideos', JSON.stringify(res.data.data.videos));
                        this.videos = JSON.parse(sessionStorage.homeVideos);
                    })
                    .catch(err => alert("ERROR: " + err.response.data.message));
                }
            }
        },
        created() {
            this.fetchData();
        },
        mounted(){
            if (sessionStorage.user) {
            // this.videoId = video._id
            this.user = JSON.parse(sessionStorage.user);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home{
        margin: 7rem 4.5rem 3.5rem 4.5rem;
        display: flex;

        &__left{
            width: 70%;
        }

        &__right{
            width: 25%;
        }

        @media screen and (max-width: 900px){
            margin: 7rem 0 3.5rem 1.5rem;
        }

        @media screen and (max-width: 700px){
            flex-direction: column-reverse;

            &__right{
                display: flex;
                width: 100%;
                padding-right: 2.5rem;
                justify-content: space-between;
            }

            &__left{
                width: 100%
            }
        }
    }
</style>