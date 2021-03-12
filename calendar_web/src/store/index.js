import { createStore } from 'vuex'
import state from './state'
import mutations from './'

export default createStore({
    //导入的写法
    state,
    mutations
    //常见写法
    // state: {},
    // mutations: {},
    // actions: {},
    // modules: {}
})