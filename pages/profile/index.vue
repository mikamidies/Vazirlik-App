<template>
  <div class="master">
    <SiteTop :title="title" />
    <div class="container">
      <LinksHeader />
      <div class="person cardo">
        <div class="flexer">
          <div class="right">
            <div class="items">
              <div class="item">
                <p class="sup">
                  {{ $store.state.translations["hostel_owner"] }}
                </p>
                <p class="name">{{ $store.state.user["name"] }}</p>
              </div>
              <div class="item">
                <p class="sup">{{ $store.state.translations["jshshir"] }}</p>
                <p class="name">32001986500022</p>
              </div>
              <div class="item">
                <p class="sup">{{ $store.state.translations["passport"] }}</p>
                <p class="name">AD3665673</p>
              </div>
              <div class="item">
                <p class="sup">{{ $store.state.translations["date_birth"] }}</p>
                <p class="name">1998-01-20</p>
              </div>
              <div class="item">
                <p class="sup">
                  {{ $store.state.translations["hostel_address"] }}
                </p>
                <p class="name">ЎЗБЕКИСТОН, ТОШКЕНТ ШАҲРИ, БОҒОБОД МФЙ, 15 МАВЗЕ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="add cardo" v-if="hotels.length < 1">
        <div class="mid">
          <h4>{{ $store.state.translations["hostel"] }}</h4>
          <p>{{ $store.state.translations["no_added"] }}</p>
          <NuxtLink to="/profile/add">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M12 18.6665L13.6999 20.3664C14.8898 21.5563 16.8709 21.3602 17.8043 19.96L21.3333 14.6665M28 13.5336V23.9556C28 26.9256 25.6122 29.3332 22.6667 29.3332H9.33333C6.38781 29.3332 4 26.9256 4 23.9556V13.5336C4 11.919 4.71953 10.3898 5.95982 9.36854L12.6265 3.87897C14.5897 2.26235 17.4103 2.26235 19.3735 3.87896L26.0402 9.36853C27.2805 10.3898 28 11.919 28 13.5336Z"
                stroke="#3C4BDC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ $store.state.translations["add_hostel"] }}
          </NuxtLink>
        </div>
      </div>

      <div class="cardo" v-else>
        <div class="flexer">
          <div class="left">
            <img
              :src="`https://api.hotels.ndc.uz/storage/${hotel?.img}`"
              alt=""
              class="pic"
            />
          </div>
          <div class="right">
            <div class="items">
              <div class="item">
                <p class="sup">
                  {{ $store.state.translations["hostel_name"] }}
                </p>
                <p class="name">{{ hotel?.name || "------" }}</p>
              </div>
              <div class="item">
                <p class="sup">
                  {{ $store.state.translations["hostel_phone"] }}
                </p>
                <p class="name">
                  {{ hotel?.phone_number || "------" }},
                  {{ hotel?.phone_number2 }}
                </p>
              </div>
              <div class="item">
                <p class="sup">{{ $store.state.translations["website"] }}</p>
                <p class="name">{{ hotel?.website || "------" }}</p>
              </div>
              <div class="item">
                <p class="sup">
                  {{ $store.state.translations["email"] }}
                </p>
                <p class="name">{{ hotel?.email || "------" }}</p>
              </div>
              <div class="item">
                <p class="sup">
                  {{ $store.state.translations["hostel_region"] }}
                </p>
                <p class="name">{{ hotel?.region?.name || "------" }}</p>
              </div>
              <div class="item">
                <p class="sup">{{ $store.state.translations["legal_name"] }}</p>
                <p class="name">{{ hotel?.legal_name || "------" }}</p>
              </div>
              <div class="item">
                <p class="sup">{{ $store.state.translations["stir_num"] }}</p>
                <p class="name">{{ hotel?.tin || "------" }}</p>
              </div>
              <div class="item">
                <p class="sup">
                  {{ $store.state.translations["hostel_owner"] }}
                </p>
                <p class="name">
                  {{ hotel?.director_surname || "------" }}
                  {{ hotel?.director_name }}
                  {{ hotel?.director_fathers_name }}
                </p>
              </div>
              <div class="item">
                <p class="sup">
                  {{ $store.state.translations["hostel_address"] }}
                </p>
                <p class="name">
                  {{ hotel?.address || "----" }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="link">
          <NuxtLink :to="`/profile/${hotel?.id}`">
            {{ $store.state.translations["update_data"] }}
          </NuxtLink>

          <NuxtLink class="app" :to="`/applications/${hotel?.id}`">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M12 18.6665L13.6999 20.3664C14.8898 21.5563 16.8709 21.3602 17.8043 19.96L21.3333 14.6665M28 13.5336V23.9556C28 26.9256 25.6122 29.3332 22.6667 29.3332H9.33333C6.38781 29.3332 4 26.9256 4 23.9556V13.5336C4 11.919 4.71953 10.3898 5.95982 9.36854L12.6265 3.87897C14.5897 2.26235 17.4103 2.26235 19.3735 3.87896L26.0402 9.36853C27.2805 10.3898 28 11.919 28 13.5336Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ $store.state.translations["send_it"] }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hotelsApi from "@/api/hotels";

export default {
  data() {
    return {
      title: "Mening profilim",
      hotels: [],
      hotel: {},
    };
  },
  async mounted() {
    if (localStorage.getItem("authToken")) {
      try {
        const hotels = await hotelsApi.getUserHotels(this.$axios, {
          params: {},
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });

        this.hotels = hotels?.data;
        this.hotel = hotels?.data[0];
      } catch (e) {
        // this.$router.push("/");
      }
    } else {
      this.$router.push("/auth");
    }
  },
};
</script>

<style scoped>
.container {
  padding: 40px 44px 112px 44px;
}
.cardo {
  padding: 40px;
  border-radius: 16px;
  background: var(--Apple-Grey, #f5f5f7);
}
.flexer {
  display: flex;
  justify-content: center;
  gap: 40px;
}
.pic {
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 50%;
  display: flex;
}
.items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 48px;
}
.person .items {
  grid-template-columns: repeat(3, 1fr);
  column-gap: 4px;
  max-width: 70%;
  margin: 0 auto;
}
.sup {
  margin-bottom: 8px;
  color: var(--grey-80, #353437);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.name {
  max-width: 464px;
  color: var(--Blue-dark, #002856);
  font-family: var(--semi);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
}
.link {
  display: flex;
  justify-content: center;
  padding-top: 55px;
  gap: 12px;
}
.link a {
  display: flex;
  margin-top: 12px;
  border-radius: 16px;
  border: 1px solid var(--Agro-Blue, #3c4bdc);
  padding: 18px 50px;
  color: var(--Agro-Blue, #3c4bdc);
  font-family: var(--semi);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  transition: 0.4s;
  background: white;
  align-items: center;
}
.link a:hover {
  background: #3c4bdc;
  color: white;
}

.person {
  margin-bottom: 32px;
}
.add {
  margin-bottom: 32px;
  text-align: center;
}
.mid h4 {
  margin-bottom: 24px;
  color: var(--Black, #020105);
  font-family: var(--semi);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 28.8px */
}
.mid p {
  margin-bottom: 40px;
  color: var(--Black, #020105);
  font-family: var(--medium);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
}
.mid a {
  color: var(--Agro-blue, #3c4bdc);
  font-family: var(--semi);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  padding: 18px 50px;
  border-radius: 16px;
  border: 1px solid var(--Agro-Blue, #3c4bdc);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: 0.4s;
}
.mid a:hover {
  background: #3c4bdc;
  color: white;
}
.mid a svg path {
  transition: 0.4s;
}
.mid a:hover svg path {
  stroke: white;
}
.app {
  background: #3c4bdc !important;
  color: white !important;
  display: flex;
  align-items: center;
  gap: 8px;
}
.app:hover {
  transform: scale(0.95);
}

@media screen and (max-width: 1024px) {
  .flexer {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .pic {
    width: 80px;
    height: 80px;
  }
  .left {
    display: flex;
    justify-content: center;
  }
  .items {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .cardo {
    padding: 16px 16px 40px 16px;
  }
  .sup {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 8px;
  }
  .name {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
  .link {
    padding-top: 24px;
  }
  .container {
    padding: 40px 16px;
  }
}
</style>
