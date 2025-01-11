<template>
  <div class="wrap">
    <div class="container">
      <div class="title-box">
      <h4 class="title">{{ $store.state.translations["list_title"] }}</h4>
      <div class="link">
        <a href="https://api.hotels.ndc.uz/storage/files/list.xlsx" class="!p-0">
          <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.75 9L9 11.25M9 11.25L11.25 9M9 11.25L9 2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.625 6.75V6.75C3.76104 6.75 2.25 8.26104 2.25 10.125L2.25 11.75C2.25 13.9591 4.04086 15.75 6.25 15.75L11.75 15.75C13.9591 15.75 15.75 13.9591 15.75 11.75L15.75 10.125C15.75 8.26104 14.239 6.75 12.375 6.75V6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </a>
      </div>
    </div>
      <div class="tabler">
        <table>
          <tr>
            <th>№</th>
            <th>{{ $store.state.translations["registry_num"] }}</th>
            <th>{{ $store.state.translations["hostel_name"] }}</th>
            <th>{{ $store.state.translations["hostel_region"] }}</th>
            <th>{{ $store.state.translations["hostel_address"] }}</th>
            <th>{{ $store.state.translations["hostel_status"] }}</th>
            <th>{{ $store.state.translations["hostel_phone"] }}</th>
          </tr>
          <tr v-for="(item, index) in hotels?.data" :key="item.id">
            <td>
              <p class="strong">{{ index + 1 }}</p>
            </td>
            <td>
              <p class="strong">{{ item?.formatted_register_number || "—" }}</p>
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
              <span v-if="item?.deregistration_date !== null" class="status passive"
                >{{ $store.state.translations["register_out"] }}</span
              >
              <span v-else>
                <p v-show="item.status == 1" class="status active">
                  {{ $store.state.translations["active"] }}
                </p>
                <p v-show="item.status == 0" class="status passive">
                  {{ $store.state.translations["passive"] }}
                </p>
              </span>
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
      <div class="link">
        <NuxtLink :to="localePath('/list')">
          {{ $store.state.translations["see_all"] }}
        </NuxtLink>
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
.title-box {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
}
.title-box a {
    position: absolute;
    right: 40px;
    bottom: 28px;
    padding: 12px 24px !important;
}
.wrap {
  padding-bottom: 112px;
}
.title {
  color: var(--Blue-dark, #002856);
  text-align: center;
  font-size: var(--48);
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
  font-size: var(--14);
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
    font-size: var(--24);
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
