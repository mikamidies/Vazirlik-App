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
import translationsApi from "@/api/translations";
import authApi from "@/api/auth";

export default {
  data() {
    return {};
  },

  async mounted() {
    if (localStorage.getItem("authToken")) {
      try {
        const data = await authApi.getUserInfo(this.$axios, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        this.$store.commit("getUserInfo", data?.data?.data);
        this.$store.commit("checkAuth", true);
      } catch (e) {}
    }
  },

  async fetch() {
    const translations = await translationsApi.getTranslations(this.$axios, {
      headers: {
        Language: this.$i18n.locale,
      },
    });

    console.log(translations);

    await this.$store.commit("getTranslations", translations.data);
  },

  computed: {
    currentLang() {
      return this.$i18n.locale;
    },
  },

  watch: {
    async currentLang(val) {
      const translations = await translationsApi.getTranslations(this.$axios, {
        headers: {
          Language: this.$i18n.locale,
        },
      });

      await this.$store.commit("getTranslations", translations);
    },
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
