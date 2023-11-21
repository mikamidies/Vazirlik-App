<template>
  <div class="wrap">
    <a-pagination :default-current="6" :total="500" />
  </div>
</template>

<script>
export default {};
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
