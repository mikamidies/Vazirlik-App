<template>
  <div class="master">
    <SiteTop :title="title" />
    <div class="container">
      <LinksHeader />
      <div class="items">
        <div class="item" v-for="message in messages" :key="message?.id">
          <div class="left">
            <p class="name">{{ message?.title }}</p>
          </div>
          <div class="right">
            <NuxtLink :to="`/notifications/${message?.id}`" class="link">
              {{ moment(message?.created_at).format("DD.MM.YYYY - HH:MM") }}
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.956 6.28699L18.669 12L12.956 17.713M5.35498 12H18.652"
                    stroke="#3C4BDC"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
              ></span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <PaginationElement @getData="__GET__MESSAGES" :totalPage="totalPage" />
    </div>
  </div>
</template>

<script>
import messagesApi from "@/api/messages";
import moment from "moment";
import PaginationElement from "~/components/paginationElement.vue";
export default {
  data() {
    return {
      title: "Xabarnomalar",
      messages: [],
      totalPage: 1,
    };
  },
  async mounted() {
    this.__GET__MESSAGES();
  },
  methods: {
    moment,
    async __GET__MESSAGES() {
      const messages = await messagesApi.getMessages(this.$axios, {
        params: { page: 1, ...this.$route.query },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      this.messages = messages?.data;
      this.totalPage = messages?.total;
    },
  },
  components: { PaginationElement },
};
</script>

<style scoped>
.container {
  padding: 40px 44px 112px 44px;
}
.items {
  border: 1px solid #ebebeb;
  border-radius: 8px;
}
.item {
  display: grid;
  grid-template-columns: 7fr 3fr;
  border-bottom: 1px solid var(--grey-8, #ebebeb);
}
.left {
  padding: 16px;
  border-right: 1px solid #ebebeb;
  display: flex;
  align-items: center;
}

.item:last-child {
  border-bottom: 0;
}
.item:nth-child(even) {
  background: var(--Apple-Grey, #f5f5f7);
}
.left p {
  color: var(--Black, #020105);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  font-family: var(--medium);
}
.right a {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--Agro-Blue, #3c4bdc);
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
}
@media screen and (max-width: 1024px) {
  .container {
    overflow: hidden;
    padding: 40px 16px;
  }
}
</style>
