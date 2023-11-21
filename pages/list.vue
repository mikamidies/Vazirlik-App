<template>
  <div class="master">
    <SiteTop :title="title" />

    <div class="container">
      <div class="tabler">
        <table>
          <tr>
            <th>Reyestr raqami</th>
            <th>Mehmon uyi nomi</th>
            <th>Mehmon uyi joylashgan hudud</th>
            <th>Mehmon uyi manzili</th>
            <th>Mehmon uyi holati</th>
            <th>Mehmon uyi telefon raqami</th>
          </tr>
          <tr v-for="item in hotels.data" :key="item.id">
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
              <p v-show="item.status == 1" class="status active">Aktiv</p>
              <p v-show="item.status == 0" class="status passive">
                To'xtatilgan
              </p>
            </td>
            <td>
              <p class="num">{{ item.phone_number }}</p>
            </td>
          </tr>
        </table>
      </div>

      <PaginationElement />
    </div>
  </div>
</template>

<script>
import hotelsApi from "@/api/hotels";

export default {
  data() {
    return {
      title: "Oilaviy mehmon uylari ro‘yxati",
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
