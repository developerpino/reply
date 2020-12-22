import Vue from 'vue';
import Vuex from 'vuex';
import board from './board';
import reply from './board/reply';
import likes from './board/likes';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      board,
      reply,
      likes,
    },
});
  