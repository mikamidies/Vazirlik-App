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
};
