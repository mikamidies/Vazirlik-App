<template>
  <div class="master">
    <SiteTop :title="title" />
    <div class="container">
      <div class="content">
        <h4 class="title">
          {{ $store.state.translations["oneid_txt"] }}
        </h4>
        <div class="flex">
          <a :href="'https://my.gov.uz/oz/service/960'" target="_blank" class="link">
            <img
              v-if="$store.state.imageShow"
              src="@/assets/img/oneid.svg"
              alt=""
            />
            {{ $store.state.translations["sign_in"] }}
          </a>
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
      title: this.$store.state.translations["oneid_title"],
      link: "",
    };
  },
  mounted() {
    if (localStorage.getItem("authToken"))
      this.$router.push(this.localePath("/profile"));
  },
  async fetch() {
    const linkData = await authApi.getLink(this.$axios);
    this.link = linkData?.data?.data;
  },
};
</script>

<style scoped>
.container {
  padding: 120px 0 230px 0;
}
.title {
  max-width: 878px;
  margin: 0 auto 32px auto;
  color: var(--Black, #020105);
  text-align: center;
  font-family: var(--medium);
  font-size: var(--24);
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
}
.link {
  padding: 18px 50px;
  border-radius: 16px;
  border: 1px solid var(--Agro-Blue, #3c4bdc);
  display: inline-flex;
  gap: 8px;
  color: var(--Agro-Blue, #3c4bdc);
  font-family: var(--semi);
  font-size: var(--14);
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
}
.flex {
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 1024px) {
  .container {
    padding: 40px 16px;
  }
  .title {
    font-size: var(--16);
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
  .link {
    border-radius: 8px;
    border: 1px solid var(--Agro-Blue, #3c4bdc);
  }
}
</style>
