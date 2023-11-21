export default {
  head: {
    title: "Oilaviy mehmon uylari ro‘yxati",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["ant-design-vue/dist/antd.css", "@/assets/css/main.css"],

  plugins: ["@/plugins/antd-ui", { src: "~plugins/v-mask.js", ssr: false }],

  components: true,

  buildModules: [],

  modules: ["@nuxtjs/axios"],

  axios: {
    credentials: false,
    init(axios) {
      axios.defaults.withCredentials = true;
    },
    baseURL: process.env.BASE_URL,
  },

  build: {},
};
