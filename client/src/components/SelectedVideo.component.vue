<template>
    <div class="selected">
        <h2 class="selected__title">{{video.title}}</h2>
        <video class="selected__video" :src=video.video controls :poster=video.thumb></video>
        
        <div style="width: 95%;">
            <div class="selected__details">
                <h3 class="selected__details__views">{{video.views}} views</h3>

                <div class="selected__thumbs">
                    <div @click="video.likes+=1" class="selected__like">&#128077; {{video.likes}}</div>
                    <div @click="downvote" class="selected__dislike">&#128078; {{video.dislikes}}</div>
                </div>
            </div>

            <form class="selected__commentbox">
                <label for="comments" class="selected__commentbox__label">Comments</label>
                <textarea v-model="text" class="selected__commentbox__textarea" rows="4" id="comments" placeholder="Type a sweet comment..."></textarea>
                
                <button @click="handleSubmit" class="selected__commentBtn">add comment</button>
            </form>


            <div v-bind:key="comment._id" v-for="comment in video.comments" class="selected__comments">
                <Comment v-bind:comment="comment"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Comment from './Comment.component.vue';
    import axios from 'axios';

    export default {
        name: 'SelectedVideo',
        data() {
            return {
                text: null,
                videoId: null,
                userId: null
            }
        },
        props: ["video", "user"],
        components: {
            Comment
        },
        methods: {
            handleSubmit(event) {
                event.preventDefault();
                if(!this.user) return alert('Please sign in to comment.');
                this.userId = this.user._id
                this.videoId = this.video._id
                this.createComment(this.text, this.videoId, this.userId);
                this.text = '';
            },
            downvote() {
                if(this.video.dislikes > 0) this.video.dislikes-=1;
                return;
            },
            async createComment(comment, video, user) {
                try{
                    const res = await axios({
                        method: 'POST',
                        url: 'http://localhost:8000/api/v1/comments/',
                        data: {
                            comment,
                            video,
                            user
                        }
                    });
                    if (res.data.status === 'success') {
                        this.$emit('newcomment');
                        // console.log(res);
                    }
                } catch(err) {
                    alert(err.response.data.message);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .selected{

        &__title{
            font-size: 2.8rem;
            font-weight: 400;
            margin-bottom: 2rem;
        }

        &__video{
            width: 95%;
        }

        &__details{
            display: flex;
            justify-content: space-between;
            /* background-color: red; */
            font-size: 2rem;
            border-bottom: 1px solid #333;
            padding: 2rem 0 2rem 0;

            &__views{
                font-weight: 300;
            }
        }

        &__thumbs{
            display: flex;
            cursor: pointer;
        }

        &__commentbox{
            width: 100%;
            /* background-color: blue; */
            padding-bottom: 2.5rem;

            &__label{
                font-size: 1.8rem;
                display: block;
                padding: 2rem 0 1rem 0;
            }

            &__textarea{
                width: 100%;
                font-size: 2rem;
                padding: 2rem 0 0 2rem;
            }
        }

        &__commentBtn{
            background-color: orange;
            cursor: pointer;
            color: #fff;
            outline: none;
            border: none;
            font-size: 2rem;
            padding: 1.5rem 3.5rem 1.5rem 3.5rem;
            margin-bottom: 2rem;
        }
    }
</style>