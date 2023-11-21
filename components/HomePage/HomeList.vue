<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">Oilaviy mehmon uylari ro‘yxati</h4>
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
              <p v-show="item.status == 1" class="status active">Aktiv</p>
              <p v-show="item.status == 0" class="status passive">
                To'xtatilgan
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
      <div class="link">
        <NuxtLink to="/list"> Barchasini ko’rish </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["hotels"],

  mounted() {},
};
</script>

<style scoped>
@import url(@/assets/css/table.css);
.wrap {
  padding-bottom: 112px;
}
.title {
  color: var(--Blue-dark, #002856);
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 57.6px */
  margin-bottom: 32px;
  font-family: var(--medium);
}
.link {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}
.link a {
  color: var(--Agro-Blue, #3c4bdc);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  font-family: var(--medium);
  border-radius: 16px;
  border: 1px solid var(--Agro-Blue, #3c4bdc);
  padding: 18px 50px;
  transition: 0.4s;
}
.link a:hover {
  background: #3c4bdc;
  color: white;
}
@media screen and (max-width: 1024px) {
  .wrap {
    overflow: hidden;
  }
  .title {
    margin: 0 auto 24px auto;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
  }
  .link {
    margin-top: 24px;
  }
  .link a {
    width: 100%;
    text-align: center;
  }
}
</style>
