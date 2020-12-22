import api from '../../../api/reply';

export default {
  state: {
    likes: {},
  },
  mutations: {
    setLikes: (state, payload) => {
      state.likes = payload;
    },
    pushLikes: (state, payload) => {
      if (state.likes[payload.boardIdx]) {
        state.likes[payload.boardIdx].push(payload.user);
      } else {
        state.likes[payload.boardIdx] = [payload.user];
      }
    },
    removeLikes: (state, payload) => {
      const indexOfUser = state.likes[payload.boardIdx].indexOf(payload.user);
      if (indexOfUser>-1) {
        state.likes[payload.boardIdx].splice(
          indexOfUser,
          1
        );
      }
    },
  },
  actions: {
    getLikes(context, payload) {
      return api.getLikes(payload)
        .then(({data}) => {
          context.commit('setLikes', data);
        });
    },
    saveLikes(context, payload) {
      return api.setLikes(payload)
      .then(r => {
        if (r.status === 201) {
          context.commit('pushLikes', payload);
        }
      });
    },
    removeLikes(context, payload) {
      return api.removeLikes(payload)
      .then(r => {
        if (r.status === 202) {
          context.commit('removeLikes', payload);
        }
      });
    },
  },
  getters: {
    getLikes: (state) => state.likes,
  }
}
