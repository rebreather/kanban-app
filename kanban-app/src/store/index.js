/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    auth: { //상태 'Auth'
        token: null, //token을 null로 초기화
        userId: null //'userId'를 null로 초기화
    },
    board: {
        lists: [] // 상태 TaskList는 빈 배열로 초기화
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    strict: process.env.NODE_ENV !== 'production'
})