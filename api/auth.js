export default {
  async handleAuth(formData) {
    try {
      const res = await $nuxt.$axios.post("/auth/login", formData);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  async getLink(axios) {
    let res;

    if (axios) {
      res = await axios.get("/client/get_one_id_auth_link");
    }
    return res;
  },
  async getUserInfo(axios, params) {
    let res;

    if (axios) {
      res = await axios.get("/me", { ...params });
    }
    return res;
  },
  async getToken(formData) {
    const res = await $nuxt.$axios.post("/client/get_token", formData);
    return res;
  },
};
