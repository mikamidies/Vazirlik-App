<template>
  <div class="wrap">
    <div class="header">
      <div class="left">
        <NuxtLink :to="localePath('/profile')">{{
          $store.state.translations["my_profile"]
        }}</NuxtLink>
        <NuxtLink :to="localePath('/applications')">{{
          $store.state.translations["my_applications"]
        }}</NuxtLink>
        <NuxtLink :to="localePath('/notifications')">{{
          $store.state.translations["notifications"]
        }}</NuxtLink>
      </div>
      <div class="right">
        <button @click="handleModal = !handleModal">
          {{ $store.state.translations["log_out"] }}
        </button>
      </div>
    </div>
    <div class="modaller" :class="{ show: handleModal == true }">
      <div class="space" @click="handleModal = false"></div>
      <div class="body">
        <button class="x" @click="handleModal = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
          >
            <path
              d="M14.5013 12.792L20.4822 6.81104L22.191 8.51987L16.2102 14.5008L22.191 20.4817L20.4822 22.1906L14.5013 16.2097L8.52036 22.1906L6.81152 20.4817L12.7925 14.5008L6.81152 8.51987L8.52036 6.81104L14.5013 12.792Z"
              fill="#3C4BDC"
            />
          </svg>
        </button>
        <h4>Tizimdan chiqishga tayyormisiz?</h4>
        <div class="buttons">
          <button @click="handleModal = false" class="no">Yo‘q</button>
          <button @click="logOut" class="yes">Ha</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authApi from "@/api/auth";
export default {
  data() {
    return {
      handleModal: false,
    };
  },
  methods: {
    async logOut() {
      try {
        const hotels = await authApi.logOut(this.$axios, {
          params: {},
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });

        await localStorage.removeItem("authToken");
        this.$store.commit("checkAuth");
        this.$router.push(this.localePath("/"));
      } catch (e) {
        await localStorage.removeItem("authToken");
        this.$store.commit("checkAuth");
        this.$router.push(this.localePath("/"));
      }
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
}
.header .left {
  display: flex;
  align-items: center;
  gap: 24px;
}
.header a,
.header button {
  background: transparent;
  cursor: pointer;
  padding: 18px 50px;
  border-radius: 16px;
  border: 1px solid var(--Grey, #5d5d5f);
  color: var(--Grey, #5d5d5f);
  font-family: var(--semi);
  font-size: var(--14);
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  transition: 0.4s;
}
.header a:hover,
.header button:hover {
  background: #3c4bdc;
  color: white;
  border-color: #3c4bdc;
}
.header a.nuxt-link-exact-active,
.header a.nuxt-link-active {
  background: #3c4bdc;
  color: white;
  border-color: #3c4bdc;
}

.modaller {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.2s;
}
.modaller.show {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
}
.space {
  background: rgba(2, 1, 5, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.body {
  border-radius: 16px;
  border: 1px solid #e1e3f5;
  background: #f7f8fc;
  z-index: 99;
  position: relative;
  width: 100%;
  max-width: 952px;
  margin: 0 auto;
  height: 378px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
}
.x {
  width: 56px;
  height: 56px;
  background: #eff0f9;
  border-radius: 50%;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 24px;
  right: 24px;
}
.body h4 {
  color: var(--Dark-blue, #002856);
  text-align: center;
  font-family: var(--medium);
  font-size: var(--24);
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
}
.buttons {
  display: flex;
  align-items: center;
  gap: 24px;
}
.no {
  border-radius: 16px;
  border: 1px solid var(--Agro-Blue, #3c4bdc);
  background: #fff;
  padding: 18px 50px;
  color: var(--Agro-Blue, #3c4bdc);
  font-family: var(--semi);
  font-size: var(--14);
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  min-width: 220px;
}
.yes {
  padding: 18px 50px;
  color: white;
  font-family: var(--semi);
  font-size: var(--14);
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  border-radius: 16px;
  background: var(--Agro-blue, #3c4bdc);
  border: 1px solid var(--Agro-Blue, #3c4bdc);
  min-width: 220px;
}
</style>
