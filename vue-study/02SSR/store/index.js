import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore(){
	return new Vuex.Store({
        state: {
            moviesList: [],
            movieDetail:{}
        },
        mutations: {
            // mutation 必须是同步函数
            getMoviesList(state, list){   // why not {moviesList}
                // console.log('mutations:getMoviesList')
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
                // console.log('actions:getMoviesList')
                return axios.get('https://www.easy-mock.com/mock/595508da9adc231f356dd755/movies-recommand/movies/list')
                    .then(function (response) {
                        context.commit('getMoviesList',response.data.entity);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

                // $.get('https://www.easy-mock.com/mock/595508da9adc231f356dd755/movies-recommand/movies/list', (data) => {
                //     context.commit('getMoviesList',data.entity);
                // })
            },
            getMovieDetail(context,id){
                return axios.get(`https://www.easy-mock.com/mock/595508da9adc231f356dd755/movies-recommand/movies/detail/${id}`)
                    .then(function (response) {
                        context.commit('getMovieDetail',response.data.entity);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    })
}