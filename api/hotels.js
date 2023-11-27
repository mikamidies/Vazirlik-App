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
       
    }
  },
  async getUserHotels(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/hotels", {
          ...params,
        });
      }
      return res.data.data;
    } catch (e) {
       
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
       
    }
  },

  async getHotelById(axios, payload) {
    try {
      let res;

      if (axios) {
        res = await axios.get(`/hotels/${payload.id}`, {
          ...payload.params,
        });
      }
      return res.data;
    } catch (e) {
       
    }
  },

  async postHotels(axios, payload) {
    let res;

    if (axios) {
      res = await axios.post("/hotels", payload.data, { ...payload.params });
    }
  },
  async putHotels(axios, payload) {
    let res;

    if (axios) {
      res = await axios.put(`/hotels/${payload.id}`, payload.data, { ...payload.params });
    }
  },
};
