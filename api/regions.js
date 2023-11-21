export default {
  async getRegions(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/client/regions", {
          ...params,
        });
      }
      return res.data.data;
    } catch (e) {
      console.log(e);
    }
  },
};
