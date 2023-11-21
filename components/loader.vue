<template lang="html">
  <div class="loader">
    <a-spin>
      <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
    </a-spin>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 10000;
  pointer-events: none;
}
</style>
