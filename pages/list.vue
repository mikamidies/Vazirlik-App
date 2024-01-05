<template>
  <div class="master">
    <site-top :title="title">
      <img
        v-if="$store.state.imageShow"
        src="@/assets/img/header.jpg"
        alt=""
        class="cover"
      />
    </site-top>

    <div class="container">
      <div class="tabler">
        <table>
          <tr>
            <th>{{ $store.state.translations["registry_num"] }}</th>
            <th>{{ $store.state.translations["hostel_name"] }}</th>
            <th>{{ $store.state.translations["hostel_region"] }}</th>
            <th>{{ $store.state.translations["hostel_address"] }}</th>
            <th>{{ $store.state.translations["hostel_status"] }}</th>
            <th>{{ $store.state.translations["hostel_phone"] }}</th>
          </tr>
          <tr v-for="item in hotels?.data" :key="item.id">
            <td>
              <p class="strong">{{ item?.register_number || "—" }}</p>
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
              <NuxtLink :to="localePath(`/hotels/${item.id}`)">
                <p class="num">
                  {{ item.phone_number }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.9565 6.28711L18.6695 12.0001L12.9565 17.7131M5.35547 12.0001H18.6525"
                      stroke="#3C4BDC"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </NuxtLink>
            </td>
          </tr>
        </table>
      </div>

      <PaginationElement @getData="__GET_HOTELS" :totalPage="totalPage" v-if="totalPage > 20" />
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
