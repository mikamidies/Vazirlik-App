<template>
  <div class="wrap">
    <div class="container">
      <div class="left">
        <NuxtLink to="/" class="title">
          Oilaviy mehmon uylari <br />
          <span>uylari ro‘yxati</span>
        </NuxtLink>
      </div>
      <div class="mid">
        <NuxtLink to="/"> {{ $store.state.translations["main"] }} </NuxtLink>
        <NuxtLink to="/list">
          {{ $store.state.translations["list_title"] }}
        </NuxtLink>
      </div>
      <div class="right">
        <button @click="handleModal = !handleModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 22L20 20M2 11.5C2 6.25329 6.25329 2 11.5 2C16.7467 2 21 6.25329 21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5Z"
              stroke="#3C4BDC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 2.25C17.5858 2.25 17.25 2.58579 17.25 3C17.25 3.41421 17.5858 3.75 18 3.75V2.25ZM6 3.75C6.41421 3.75 6.75 3.41421 6.75 3C6.75 2.58579 6.41421 2.25 6 2.25V3.75ZM9.25 17.5C9.25 19.0188 8.01878 20.25 6.5 20.25V21.75C8.84721 21.75 10.75 19.8472 10.75 17.5H9.25ZM6.5 20.25C4.98122 20.25 3.75 19.0188 3.75 17.5H2.25C2.25 19.8472 4.15279 21.75 6.5 21.75V20.25ZM3.75 17.5C3.75 15.9812 4.98122 14.75 6.5 14.75V13.25C4.15279 13.25 2.25 15.1528 2.25 17.5H3.75ZM6.5 14.75C8.01878 14.75 9.25 15.9812 9.25 17.5H10.75C10.75 15.1528 8.84721 13.25 6.5 13.25V14.75ZM20.25 17.5C20.25 19.0188 19.0188 20.25 17.5 20.25V21.75C19.8472 21.75 21.75 19.8472 21.75 17.5H20.25ZM17.5 20.25C15.9812 20.25 14.75 19.0188 14.75 17.5H13.25C13.25 19.8472 15.1528 21.75 17.5 21.75V20.25ZM14.75 17.5C14.75 15.9812 15.9812 14.75 17.5 14.75V13.25C15.1528 13.25 13.25 15.1528 13.25 17.5H14.75ZM17.5 14.75C19.0188 14.75 20.25 15.9812 20.25 17.5H21.75C21.75 15.1528 19.8472 13.25 17.5 13.25V14.75ZM10.75 18C10.75 17.3096 11.3096 16.75 12 16.75V15.25C10.4812 15.25 9.25 16.4812 9.25 18H10.75ZM12 16.75C12.6904 16.75 13.25 17.3096 13.25 18H14.75C14.75 16.4812 13.5188 15.25 12 15.25V16.75ZM18 3.75C19.2426 3.75 20.25 4.75736 20.25 6H21.75C21.75 3.92893 20.0711 2.25 18 2.25V3.75ZM20.25 6V17.5H21.75V6H20.25ZM6 2.25C3.92893 2.25 2.25 3.92893 2.25 6H3.75C3.75 4.75736 4.75736 3.75 6 3.75V2.25ZM2.25 6V17.5H3.75V6H2.25Z"
              fill="#3C4BDC"
            />
          </svg>
        </button>
        <button @click="$router.push($store.state.auth ? '/profile' : '/auth')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <ellipse
              cx="12"
              cy="17.5"
              rx="7"
              ry="3.5"
              stroke="#3C4BDC"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <circle
              cx="12"
              cy="7"
              r="4"
              stroke="#3C4BDC"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C22 10.3431 17.5228 9 12 9C6.47715 9 2 10.3431 2 12M22 12C22 13.6569 17.5228 15 12 15C6.47715 15 2 13.6569 2 12M12 22C6.47715 22 2 17.5228 2 12M12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2M2 12C2 6.47715 6.47715 2 12 2"
              stroke="#3C4BDC"
              stroke-width="1.5"
            />
          </svg>
        </button>
      </div>

      <!-- <div>
        <form @submit.prevent="onSubmit">
          <input type="text" v-model="username" />
          <input type="number" v-model="password" />

          <button type="submit">Send</button>
        </form>
      </div> -->
    </div>

    <div class="searcher" :class="{ show: handleModal == true }">
      <div class="space" @click="handleModal = false"></div>
      <div class="body">
        <div class="x" @click="handleModal = false">
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
        </div>
        <div class="limit">
          <div class="input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
                stroke="#CCD4DD"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input type="text" placeholder="Lux family Guestho" />
          </div>
          <div class="empty">
            <img src="@/assets/img/empty.svg" alt="" />
            <p>{{ $store.state.translations["no_data"] }}</p>
          </div>
          <div class="items">
            <div class="item">
              <h4>Lux family Guesthouse</h4>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <ellipse
                    cx="10"
                    cy="9.16675"
                    rx="2.5"
                    ry="2.5"
                    stroke="#3C4BDC"
                    stroke-width="1.5"
                  />
                  <path
                    d="M17.5 9.07416C17.5 13.1652 12.8125 18.3334 10 18.3334C7.1875 18.3334 2.5 13.1652 2.5 9.07416C2.5 4.98316 5.85786 1.66675 10 1.66675C14.1421 1.66675 17.5 4.98316 17.5 9.07416Z"
                    stroke="#3C4BDC"
                    stroke-width="1.5"
                  />
                </svg>
                Lux Family Guesthouse Toshkent sh, Mirobod tumani, O‘zbekiston
                ko‘chasi, 2-uy
              </p>
              <NuxtLink to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M11.7676 8.23218L8.23204 11.7677"
                    stroke="#3C4BDC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M8.61065 5.83344L9.99955 4.44454C11.5337 2.91041 14.021 2.91041 15.5551 4.44454V4.44454C17.0893 5.97868 17.0893 8.466 15.5551 10.0001L14.1662 11.389"
                    stroke="#3C4BDC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11.3893 14.1666L10.0005 15.5555C8.46632 17.0896 5.979 17.0896 4.44486 15.5555V15.5555C2.91073 14.0213 2.91073 11.534 4.44486 9.99987L5.83376 8.61097"
                    stroke="#3C4BDC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
                Havola: <span> pereneseniye-nastennoy-rospisi </span>
              </NuxtLink>
            </div>
            <div class="item">
              <h4>Lux family Guesthouse</h4>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <ellipse
                    cx="10"
                    cy="9.16675"
                    rx="2.5"
                    ry="2.5"
                    stroke="#3C4BDC"
                    stroke-width="1.5"
                  />
                  <path
                    d="M17.5 9.07416C17.5 13.1652 12.8125 18.3334 10 18.3334C7.1875 18.3334 2.5 13.1652 2.5 9.07416C2.5 4.98316 5.85786 1.66675 10 1.66675C14.1421 1.66675 17.5 4.98316 17.5 9.07416Z"
                    stroke="#3C4BDC"
                    stroke-width="1.5"
                  />
                </svg>
                Lux Family Guesthouse Toshkent sh, Mirobod tumani, O‘zbekiston
                ko‘chasi, 2-uy
              </p>
              <NuxtLink to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M11.7676 8.23218L8.23204 11.7677"
                    stroke="#3C4BDC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M8.61065 5.83344L9.99955 4.44454C11.5337 2.91041 14.021 2.91041 15.5551 4.44454V4.44454C17.0893 5.97868 17.0893 8.466 15.5551 10.0001L14.1662 11.389"
                    stroke="#3C4BDC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11.3893 14.1666L10.0005 15.5555C8.46632 17.0896 5.979 17.0896 4.44486 15.5555V15.5555C2.91073 14.0213 2.91073 11.534 4.44486 9.99987L5.83376 8.61097"
                    stroke="#3C4BDC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
                Havola: <span> pereneseniye-nastennoy-rospisi </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authApi from "@/api/auth.js";

export default {
  data() {
    return {
      username: "",
      password: "",
      handleModal: false,
    };
  },
  methods: {
    async onSubmit() {
      const formData = {
        username: this.username,
        password: this.password,
      };

      this.handleAuth(formData);
    },

    async handleAuth(formData) {
      try {
        const res = await authApi.handleAuth(formData);

        localStorage.setItem("authToken", res.data.data.token);

        console.log(res);
      } catch (error) {
        console.log("error");
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 44px;
}
.title {
  color: var(--Blue-dark, #002856);
  font-family: var(--decor);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
  text-transform: uppercase;
}
.title span {
  color: var(--White, var(--White, #fff));
  font-family: var(--decor);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  background: var(--Green, #009a10);
  display: inline-block;
  padding: 0 3px;
  transform: translateY(-8px);
  text-transform: lowercase;
}
.mid a {
  color: var(--Black, #020105);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.mid {
  display: flex;
  gap: 44px;
}
.right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.right button {
  cursor: pointer;
  background: #eff0f9;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
}
.searcher {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.3s;
}
.searcher.show {
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
  border-radius: 0px 0px 16px 16px;
  border: 1px solid #e1e3f5;
  background: #f7f8fc;
  width: 100%;
  max-width: 1536px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding: 32px 48px 48px 48px;
  transition: 0.4s;
  transform: translateY(-100%);
}
.searcher.show .body {
  transform: translateY(0);
}
.x {
  top: 32px;
  right: 64px;
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #eff0f9;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.input {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  gap: 12px;
}
.limit {
  max-width: 90%;
}
.input input {
  color: var(--Dark-blue, #002856);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  width: 100%;
  background: transparent;
  border: none;
  padding: 8px 0;
}
.input input:focus {
  outline: none;
}
.items {
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  gap: 24px;
  display: none;
}
.item {
  padding: 16px 24px;
  border-radius: 16px;
  background: #fff;
  transition: 0.2s;
}
.item:hover {
  background: #edeffa;
}
.item h4 {
  margin-bottom: 8px;
  color: var(--Blue-dark, #002856);
  font-family: var(--semi);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
}
.item p {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #353437;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.item a {
  color: #353437;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 187.5% */
  letter-spacing: 0.64px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.item a span {
  color: var(--Agro-blue, #3c4bdc);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 187.5% */
  letter-spacing: 0.64px;
}
.empty {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  display: none;
}
.empty img {
  width: 100%;
  max-width: 390px;
  height: 200px;
  object-fit: contain;
  display: flex;
  margin-bottom: 16px;
}
.empty p {
  color: var(--Dark-blue, #002856);
  text-align: center;
  font-family: var(--medium);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
}
@media screen and (max-width: 1024px) {
  .right,
  .mid {
    display: none;
  }
  .title {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
  .title span {
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
  .container {
    padding: 24px;
  }
}
</style>
