<template>
  <div class="master">
    <HomeHero />
    <HomeAbout />
    <HomeList />
  </div>
</template>

<script>
import hotelsApi from "@/api/hotels";

export default {
  async asyncData({ $axios }) {
    const hotels = await hotelsApi.getHotels($axios);

    console.log(hotels);

    return {
      hotels,
    };
  },
};
</script>

<style></style>
