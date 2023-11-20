export default {
  async getHotels(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/hotels", {
          ...params,
        });
      }
      return res.data.data;
    } catch (e) {
      console.log(e);
    }
  },
};
