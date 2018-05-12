/**
 * Created by asus on 2018/5/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  title:"",
  color:"",
}
const mutations = {
  routerLinks(state,params){
    state.title = params.title;
    state.color = params.color;
  }
}

export  default new Vuex.Store({
  state,
  mutations,
})
