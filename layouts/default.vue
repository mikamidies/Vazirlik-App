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
export default {};
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
