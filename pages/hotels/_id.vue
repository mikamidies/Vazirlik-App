<template>
  <div class="master">
    <SiteTop :title="title" />
    <div class="container">
      <div class="items">
        <div class="item">
          <p class="sup">Oilaviy mehmon uyi egasi:</p>
          <p class="text">{{ hotel.director_name }}</p>
        </div>
        <div class="item">
          <p class="sup">Tashkilot yuridik nomi:</p>
          <p class="text">{{ hotel.legal_name }}</p>
        </div>
        <div class="item">
          <p class="sup">Telefon raqamlari:</p>
          <p class="link">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.3866 2.72488C18.1916 2.72488 21.2756 5.80888 21.2756 9.61388M14.3866 6.26488C16.2356 6.26488 17.7356 7.76388 17.7356 9.61388M9.60562 14.3649C10.5056 15.2279 11.5606 15.9299 12.7266 16.4279L13.2456 16.6489L14.8406 15.0289C15.2366 14.6269 15.8096 14.4529 16.3626 14.5689L20.2266 15.3779C20.8806 15.5169 21.3476 16.0939 21.3476 16.7619V19.5439C21.3476 20.5389 20.5416 21.3449 19.5466 21.3449H18.6916C14.7576 21.3449 10.8756 20.0419 7.93962 17.4239C7.69762 17.2089 7.46262 16.9859 7.23362 16.7579L7.27062 16.7949C7.04162 16.5659 6.81962 16.3309 6.60462 16.0889C3.98562 13.1539 2.68262 9.27188 2.68262 5.33788V4.48288C2.68262 3.48788 3.48862 2.68188 4.48362 2.68188H7.26562C7.93362 2.68188 8.51062 3.14888 8.64962 3.80288L9.45962 7.66688C9.57462 8.21888 9.40162 8.79288 8.99962 9.18888L7.37962 10.7839L7.60062 11.3029C8.09862 12.4679 8.74162 13.4649 9.60562 14.3649Z"
                  stroke="#00CD69"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            {{ hotel.phone_number }} {{ hotel.phone_number2 }}
          </p>
        </div>
        <div class="item">
          <p class="sup">Oilaviy mehmon uyi holati:</p>
          <p v-show="hotel.status == 1" class="text">Aktiv</p>
          <p v-show="hotel.status == 0" class="text">To'xtatilgan</p>
        </div>
        <div class="item">
          <p class="sup">Reyestrga kiritilgan sanasi:</p>
          <p class="text">{{ hotel.entry_date }}</p>
        </div>
        <div class="item">
          <p class="sup">Elektron manzili:</p>
          <p class="link">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  x="2"
                  y="3"
                  width="20"
                  height="18"
                  rx="4"
                  stroke="#00CD69"
                  stroke-width="1.5"
                />
                <path
                  d="M2 7L9.50122 13.001C10.9621 14.1697 13.0379 14.1697 14.4988 13.001L22 7"
                  stroke="#00CD69"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            {{ hotel.email }}
          </p>
        </div>
        <div class="item">
          <p class="sup">Reyestr raqami:</p>
          <p class="text">{{ hotel.register_number }}</p>
        </div>
        <div class="item">
          <p class="sup">Manzili:</p>
          <p class="text">
            {{ hotel.address }}
          </p>
        </div>
        <div class="item">
          <p class="sup">Oilaviy mehmon uyi sayti:</p>
          <p class="link">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C22 10.3431 17.5228 9 12 9C6.47715 9 2 10.3431 2 12M22 12C22 13.6569 17.5228 15 12 15C6.47715 15 2 13.6569 2 12M12 22C6.47715 22 2 17.5228 2 12M12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2M2 12C2 6.47715 6.47715 2 12 2"
                  stroke="#00CD69"
                  stroke-width="1.5"
                />
              </svg>
            </span>
            {{ hotel.website }}
          </p>
        </div>
      </div>
      <div class="map" style="height: 700px">
        <yandex-map
          v-if="coords.length > 0"
          :coords="coords"
          :zoom="10"
          style="height: 700px"
        >
          <ymap-marker
            :coords="coords"
            marker-id="123"
            hint-content="some hint"
          />
        </yandex-map>
      </div>
    </div>
  </div>
</template>

<script>
import hotelsApi from "@/api/hotels";

export default {
  data() {
    return {
      title: "Kontaktlar",
      hotel: {},
      coords: [],
    };
  },

  async mounted() {
    const hotels = await hotelsApi.getHotels(this.$axios, {
      params: {},
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });

    const hotel = await hotelsApi.getHotel(this.$route.params.id, this.$axios, {
      params: {},
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });

    this.hotels = hotels;
    this.hotel = hotel.data;

    this.coords[0] = hotel.data.lat.replace(",", ".");
    this.coords[1] = hotel.data.lon.replace(",", ".");
  },
};
</script>

<style scoped>
.container {
  padding: 72px 0 112px 0;
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  column-gap: 24px;
  margin-bottom: 72px;
}
.item {
  border-radius: 8px;
  background: var(--Apple-Grey, #f5f5f7);
  padding: 32px 22px;
  border-left: 5px solid #3c4bdc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 120px;
}
.sup {
  color: var(--grey-80, #353437);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  margin-bottom: 8px;
}
.text {
  color: var(--Blue-dark, #002856);
  font-family: var(--semi);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
}
.link {
  display: grid;
  grid-template-columns: 0.7fr 9.3fr;
  align-items: center;
  color: var(--Agro-Blue, #3c4bdc);
  font-family: var(--semi);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
}
.link span {
  display: flex;
}
.map iframe {
  width: 100%;
  height: 642px;
  border-radius: 32px;
}
@media screen and (max-width: 1024px) {
  .container {
    padding: 40px 16px;
  }
  .items {
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 40px;
  }
  .sup {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    margin-bottom: 4px;
  }
  .text,
  .link {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    gap: 8px;
  }
  .item {
    padding: 16px;
    border-radius: 10px;
  }
  .map iframe {
    height: 366px;
    border-radius: 20px;
  }
}
</style>
