import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function createStore(){
    return new Vuex.Store({
        state: {
            moviesList: [],
            movieDetail:{}
        },
        mutations: {
            // mutation 必须是同步函数
            getMoviesList(state, list){   // why not {moviesList}
                state.moviesList = list;
            },
            getMovieDetail(state, detail){
                state.movieDetail = detail;
            }
        },
        actions:{
            // action 提交 mutation，不能直接改变 state
            // action 可以包含异步操作
            getMoviesList(context){
                $.get('https://www.easy-mock.com/mock/595508da9adc231f356dd755/movies-recommand/movies/list', (data) => {
                    context.commit('getMoviesList',data.entity);
                })
            },
            getMovieDetail(context,id){
                $.get(`https://www.easy-mock.com/mock/595508da9adc231f356dd755/movies-recommand/movies/detail/${id}`, (data) => {
                    let detail = data.entity;
                    context.commit('getMovieDetail', detail);
                })
            }
        }
    })
}

export default createStore