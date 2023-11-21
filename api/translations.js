export default {
  async getTranslations(axios, params) {
    if (axios) {
      let res = await axios.get("/client/translations", {
        ...params,
      });

      return res.data;
    }
  },
};
