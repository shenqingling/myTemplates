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
    // name: 'index',
    // data 必须是函数
    // data: {
    //     detail: {
    //         title: '',
    //         score: '',
    //         pic: ''
    //     }
    // },
    data: function() {
        return {
            detail: {
                title: '',
                score: '',
                pic: ''
            }
        }
    },
    mounted: function() {
        let id = this.$route.params.id;
        $.get(`https://www.easy-mock.com/mock/595508da9adc231f356dd755/movies-recommand/movies/detail/${id}`, (data) => {
            this.detail = data.entity
        })
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
