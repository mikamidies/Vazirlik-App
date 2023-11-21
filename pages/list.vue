<template>
  <div class="master">
    <SiteTop :title="title" />

    <div class="container">
      <div class="tabler">
        <table>
          <tr>
            <th>{{ $store.state.translations["registry_number"] }}</th>
            <th>{{ $store.state.translations["hostel_name"] }}</th>
            <th>{{ $store.state.translations["hostel_region"] }}</th>
            <th>{{ $store.state.translations["hostel_address"] }}</th>
            <th>{{ $store.state.translations["hostel_status"] }}</th>
            <th>{{ $store.state.translations["hostel_phone"] }}</th>
          </tr>
          <tr v-for="item in hotels?.data" :key="item.id">
            <td>
              <p class="strong">{{ item.register_number }}</p>
            </td>
            <td>
              <p class="strong">{{ item.name }}</p>
            </td>
            <td>
              <p class="weak">{{ item.region.name }}</p>
            </td>
            <td>
              <p class="weak">
                {{ item.address }}
              </p>
            </td>
            <td>
              <p v-show="item.status == 1" class="status active">
                {{ $store.state.translations["active"] }}
              </p>
              <p v-show="item.status == 0" class="status passive">
                {{ $store.state.translations["passive"] }}
              </p>
            </td>
            <td>
              <NuxtLink :to="`/hotels/${item.id}`">
                <p class="num">{{ item.phone_number }}</p>
              </NuxtLink>
            </td>
          </tr>
        </table>
      </div>

      <PaginationElement @getData="__GET_HOTELS" :totalPage="totalPage" />
    </div>
  </div>
</template>

<script>
import hotelsApi from "@/api/hotels";

export default {
  data() {
    return {
      title: this.$store.state.translations["list_title"],
      hotels: [],
      totalPage: 1,
    };
  },

  async mounted() {
    this.__GET_HOTELS();
  },
  methods: {
    async __GET_HOTELS() {
      try {
        const hotels = await hotelsApi.getHotels(this.$axios, {
          params: { page: 1, ...this.$route.query },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });

        this.hotels = hotels;
        this.totalPage = hotels.total;
      } catch (e) {}
    },
  },
};
</script>

<style scoped>
@import url(@/assets/css/table.css);
.container {
  margin: 40px auto 112px auto;
}
@media screen and (max-width: 1024px) {
  .container {
    margin: 40px 0;
    overflow: hidden;
  }
}
</style>
