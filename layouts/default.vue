<template>
  <div class="wrapper">
    <DesktopHeader />
    <main class="main">
      <nuxt />
    </main>
    <DesktopFooter />
  </div>
</template>

<script>
import authApi from "@/api/auth";

export default {
  async mounted() {
    if (localStorage.getItem("authToken")) {
      try {
        const data = await authApi.getUserInfo(this.$axios, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        this.$store.commit("getUserInfo", data?.data?.data);
      } catch (e) {}
    }
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1 1 auto;
}
</style>
