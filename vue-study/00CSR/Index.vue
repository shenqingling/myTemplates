<template>
    <div>
        <p>{{greeting}} World!</p>
        <ul>
            <li v-for="m in list">
                {{m.title}}
            </li>
        </ul>
    </div>
</template>
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
