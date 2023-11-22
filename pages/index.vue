<template>
  <div class="master">
    <HomeHero />
    <HomeAbout />
    <HomeList :hotels="hotels" />
    <Loader v-if="loading" />
  </div>
</template>

<script>
import hotelsApi from "@/api/hotels";
import authApi from "@/api/auth";
import Loader from "~/components/loader.vue";

export default {
  data() {
    return {
      hotels: [],
      loading: false,
    };
  },
  async mounted() {
    if (this.$route.query["code"]) {
      try {
        this.loading = true;
        await this.$store.commit("getCode", this.$route.query["code"]);
        this.$router.replace({ path: "/", query: {} });
        const tokenData = await authApi.getToken({
          code: this.$store.state.code,
        });
        this.loading = false;
        await localStorage.setItem("authToken", tokenData?.data?.data?.token);
        if (localStorage.getItem("authToken")) {
          try {
            const data = await authApi.getUserInfo(this.$axios, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
              },
            });
            this.$store.commit("getUserInfo", data?.data?.data);
            this.$store.commit("checkAuth", true);
          } catch (e) {}
        }
      } catch (e) {
      } finally {
        this.loading = false;
      }
    }
    const hotels = await hotelsApi.getHotels(this.$axios, {
      params: {},
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    this.hotels = hotels;
  },
  components: { Loader },
};
</script>

<style></style>
