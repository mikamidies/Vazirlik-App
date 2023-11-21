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
        localStorage.setItem("authToken", tokenData?.data?.data?.token);
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
    if (localStorage.getItem("authToken")) {
      this.$store.commit("checkAuth", true);
    }
  },
  components: { Loader },
};
</script>

<style></style>
