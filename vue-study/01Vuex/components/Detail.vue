<template>
    <div class="detail">
        <img :src="detail.pic">
        <div class="title">{{detail.title}}</div>
        <div class="score">
            豆瓣分：{{detail.score}}
        </div>
        <router-link to="/">返回列表</router-link>
    </div>
</template>
<!--  -->
<script>
module.exports = {
    data: function() {
        return {}
    },
    computed:{
        detail(){
            return this.$store.state.movieDetail;
        }
    },
    mounted: function() {
        let id = this.$route.params.id;
        this.$store.dispatch('getMovieDetail', id);
    }
}
</script>
<!--  -->
<style>
.detail img {
    float: left;
    margin-right: 20px;
}

.detail .title,
.detail .score {
    line-height: 2em;
}
</style>
