export default {
  async getMessages(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/messages", {
          ...params,
        });
      }
      return res.data.data;
    } catch (e) {
    }
  },
  async getMessageById(axios, payload) {
    try {
      let res;

      if (axios) {
        res = await axios.get(`/messages/${payload.id}`, {
          ...payload.params,
        });
      }
      return res.data;
    } catch (e) {
    }
  },
};
