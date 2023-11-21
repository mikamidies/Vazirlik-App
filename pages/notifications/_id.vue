<template>
  <div class="master">
    <SiteTop :title="title" />
    <div class="container">
      <div class="body">
        <h4>{{message?.title}}</h4>
       <span class="editor" v-html="message?.message"></span>
      </div>

      <div class="link">
        <NuxtLink to="/list">Oilaviy mehmon uylari ro‘yxati</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import messagesApi from "@/api/messages";

export default {
  data() {
    return {
      title: "Barcha oilaviy mehmon uyi egalari diqqatiga",
      message: {},
    };
  },
  async mounted() {
    const hotel = await messagesApi.getMessageById(this.$axios, {
      id: this.$route.params.id,
      params: {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      },
    });
    this.message = hotel?.data;
    console.log(this.message);
  },
};
</script>

<style scoped>
.container {
  padding: 56px 0 112px 0;
}
.container h4 {
  color: var(--Blue-dark, #002856);
  font-family: var(--semi);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
  margin-bottom: 32px;
  display: flex;
  max-width: 952px;
  margin: 0 auto 24px auto;
}
.body {
  max-width: 1200px;
  margin: 0 auto;
}
.body .editor {
  color: var(--grey-80, #353437);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  display: flex;
  max-width: 952px;
  margin: 0 auto 24px auto;
}
.body img {
  width: 100%;
  height: 620px;
  object-fit: cover;
  border-radius: 32px;
  margin-bottom: 32px;
  display: flex;
}
.link {
  display: flex;
  justify-content: center;
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
}
.link a:hover {
  background: #3c4bdc;
  color: white;
}
@media screen and (max-width: 1024px) {
  .container {
    overflow: hidden;
    padding: 40px 16px;
  }
  .body img {
    height: 198px;
    border-radius: 20px;
  }
}
</style>
