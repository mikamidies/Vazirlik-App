export default {
  async sendApplication(payload) {
    try {
      const res = await $nuxt.$axios.post("/applications", payload.data, {
        ...payload.params,
      });
      return res;
    } catch (e) {
      console.log(e);
    }
  },

  async getApplications(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/applications", {
          ...params,
        });
      }
      return res.data.data;
    } catch (e) {
      console.log(e);
    }
  },
};
