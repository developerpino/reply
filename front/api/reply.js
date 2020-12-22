import axios from 'axios';

export default {
  async getReply(payload) {
    return await axios.get('/api/board/reply',
    {
      params: {
        idx: payload
      },
    }).catch(()=>{
      return {data: {}};
    });
  },
  async setReply(payload) {
    return await axios.post(
      `/api/board/reply/${payload.boardIdx}`,
      {
        content: payload.content
      },
    );
  },
  async getLikes(payload) {
    return await axios.get('/api/board/likes',  {
      params: {
        idx: payload
      },
    }).catch(()=>{
      return {data: {}};
    });
  },
  async setLikes(payload) {
    return await axios.post(
      `/api/board/likes/${payload.boardIdx}`,
      {
        user: payload.user
      },
    );
  },
  async removeLikes(payload) {
    return await axios.delete(
      `/api/board/likes/${payload.boardIdx}`,
      {
        params: {
          user: payload.user
        }
      },
    );
  },
}
