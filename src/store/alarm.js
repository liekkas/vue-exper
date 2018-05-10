/**
 * Created by liekkas on 2017/6/12.
 */

import {MENUS} from '@/utils/menu'
import _ from 'lodash';
export default {
  state: {
    menus: _.find(MENUS, {name: 'alarm'}).children,
    isCollapsed: true,
  },
  mutations: {
    ALARM_TOGGLE: (state,payload) =>_.filter(state.menus, menu => menu.children).forEach(item => item.isShowChildren = item.name === payload ? !item.isShowChildren : false),
    ALARM_INITTOGGLE:(state, payload) => state.menus[payload].isShowChildren = true,
    ALARM_TOGGLECOLLAPSED:({isCollapsed}) => isCollapsed = !isCollapsed,
  },
  actions: {
    ALARMToggleMenu({ commit }, payload){
      commit('ALARM_TOGGLE', payload)
    },
    ALARMInitMenu({ commit }, payload){
      commit('ALARM_INITTOGGLE', payload)
    },
    ALARMToggleCollapsed({ commit }, payload){
      commit('ALARM_TOGGLECOLLAPSED', payload)
    },
  }
}
