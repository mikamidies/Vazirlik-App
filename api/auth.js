export default {
  async handleAuth(formData) {
    try {
      const res = await $nuxt.$axios.post("/auth/login", formData);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};
