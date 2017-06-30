<template>
    <div class="movies">
        <h2>电影排行榜</h2>
        <ul>
            <li v-for="m in list">
                <router-link :to="`/${m.id}`">
                    <img :src="m.pic">
                </router-link>
                <div class="title">
                    <router-link :to="`/${m.id}`">{{m.title}}</router-link>
                </div>
                <div class="score">
                    豆瓣分：{{m.score}}
                </div>
            </li>
        </ul>
    </div>
</template>
<!--  -->
<script>
module.exports = {
    // name: 'index',
    data: function() {
        return {
            greeting: 'Hello',
            list: []
        }
    },
    mounted: function() {
        $.get('https://www.easy-mock.com/mock/595508da9adc231f356dd755/movies-recommand/movies/list', (data) => {
            this.list = data.entity
        })
    }
}
</script>
<!--  -->
<style>
.movies ul {
    padding: 0;
}

.movies li {
    display: inline-block;
    margin: 10px 20px;
}

.movies .title,
.movies .score {
    line-height: 2em;
}
</style>
