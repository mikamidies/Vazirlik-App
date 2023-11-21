<template>
  <div class="master">
    <HomeHero />
    <HomeAbout />
    <HomeList :hotels="hotels" />
  </div>
</template>

<script>
import hotelsApi from "@/api/hotels";

export default {
  data() {
    return {
      hotels: [],
    };
  },

  async mounted() {
    if (this.$route.query["code"]) {
      await this.$store.commit("getCode", this.$route.query["code"]);
      this.$router.replace({ path: "/", query: {} });
    }
    const hotels = await hotelsApi.getHotels(this.$axios, {
      params: {},
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });

    this.hotels = hotels;

    console.log(hotels);
  },
};
</script>

<style></style>
