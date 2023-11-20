export default {
  async getHotels(axios) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/hotels", {
          //   ...params,
        });
      }
      return res.data.results;
    } catch (e) {
      console.log(e);
    }
  },
};
