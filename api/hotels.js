export default {
  async getHotels(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/client/hotels", {
          ...params,
        });
      }
      return res.data.data;
    } catch (e) {
      console.log(e);
    }
  },

  async getHotel(id, axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get(`/client/hotels/${id}`, {
          ...params,
        });
      }
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
