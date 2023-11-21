<template>
  <div class="master">
    <SiteTop :title="title" />
    <div class="container">
      <div class="content">
        <h4 class="title">
          Oilaviy mehmon uyini Oilaviy Mehmon Uylari Yagona Reyestriga kiritish uchun
          ariza yuborishdan avval OneID Yagona Identifikatsiya Tizimi orqali
          avtorizatsiyadan o‘tishingiz zarur
        </h4>
        <div class="flex">
          <a :href="link" class="link">
            <img src="@/assets/img/oneid.svg" alt="" />
            Avtorizatsiyadan o‘tish
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
      title: "Royxattan o'tish",
      link: ""
    };
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
  font-size: 24px;
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
  font-size: 14px;
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
    font-size: 16px;
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
