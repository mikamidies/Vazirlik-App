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
