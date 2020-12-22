import api from '../../../api/reply';

export default {
  state: {
    reply: {},
  },
  mutations: {
    setReply: (state, payload) => {
      state.reply = payload;
    },
    pushReply: (state, payload) => {
      if (state.reply[payload.boardIdx]) {
        state.reply[payload.boardIdx].push(payload.content);
      } else {
        state.reply[payload.boardIdx] = [payload.content];
      }
    },
  },
  actions: {
    getReply(context, payload) {
      return api.getReply(payload)
        .then(({data}) => {
          context.commit('setReply', data);
        });
    },
    saveReply(context, payload) {
      return api.setReply(payload)
      .then(r => {
        if (r.status === 201) {
          context.commit('pushReply', payload);
        }
      });
    },
  },
  getters: {
    getReply: (state) => state.reply,
  }
}
