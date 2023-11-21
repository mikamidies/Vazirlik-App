<template>
  <div class="wrap">
    <a-pagination @change="onChange" v-model.number="current" :total="totalPage" />
  </div>
</template>

<script>
export default {
  props: ["totalPage"],
  data() {
    return {
      current: 1,
      params: {
        pageSize: 16,
        page: 1,
      },
    };
  },
  async mounted() {
    if (
      !Object.keys(this.$route.query).includes("page") ||
      !Object.keys(this.$route.query).includes("page_size")
    ) {
      await this.$router.replace({
        path: this.$route.path,
        query: { page: this.params.page, page_size: this.params.pageSize },
      });
    }
    this.current = Number(this.$route.query.page);
  },
  methods: {
    onChange(e) {
      this.changePage(e);
    },
    async changePage(e) {
      await this.changePagination(e);
      this.$emit("getData");
    },
    async changePagination(val) {
      if (this.$route.query.page != val) {
        await this.$router.replace({
          path: this.$route.path,
          query: {
            ...this.$route.query,
            page: val,
          },
        });
      }
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
}
.wrap :deep(.ant-pagination-item) {
  color: var(--Black, #020105);
  text-align: center;
  font-family: var(--semi);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.wrap :deep(.ant-pagination-prev .ant-pagination-item-link) {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.wrap :deep(.ant-pagination-next .ant-pagination-item-link) {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.wrap :deep(.ant-pagination-prev, .ant-pagination-jump-prev, ) {
  width: 50px;
  height: 50px;
  min-height: 50px;
}
.wrap :deep(.ant-pagination-next, .ant-pagination-jump-next) {
  width: 50px;
  height: 50px;
  min-height: 50px;
}
</style>
