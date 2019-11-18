import Vue from 'vue'
import Vuex from 'vuex'
import { type } from 'os';

Vue.use(Vuex)

const types = {
  SET_IS_AUTNENTIATED: 'SET_IS_AUTNENTIATED', // 是否认证通过
  SET_USER: 'SET_USER' // 用户信息
};

export default new Vuex.Store({
  state: {
    isAutnenticated:false,  //是否验证通过
    user:{}        //用户信息
  },
  mutations: {
    [types.SET_IS_AUTNENTIATED](state,isAutnenticated){
      if(isAutnenticated){
        state.isAutnenticated = isAutnenticated;
      }else{
        state.isAutnenticated = false;
      }
    },
    [types.SET_USER](state,user){
      if(user){
        state.user = user;
      }else{
        state.user = {};
      }
    }
  },
  actions: {
    setIsAutnenticated:({ commit }, isAutnenticated) =>{
      commit(types.SET_IS_AUTNENTIATED,isAutnenticated);
    },
    setUser:({ commit },user) =>{
      commit(types.SET_USER,user);
    }
  }
})
