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
    asyncData ({ store, route },url) {
        // 触发 action 后，会返回 Promise
        return store.dispatch('getMovieDetail', url);
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
