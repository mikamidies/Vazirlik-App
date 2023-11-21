<template>
  <div class="header">
    <div class="left">
      <NuxtLink to="/profile">{{
        $store.state.translations["my_profile"]
      }}</NuxtLink>
      <NuxtLink to="/applications">{{
        $store.state.translations["my_applications"]
      }}</NuxtLink>
      <NuxtLink to="/notifications">{{
        $store.state.translations["notifications"]
      }}</NuxtLink>
    </div>
    <div class="right">
      <button>{{ $store.state.translations["log_out"] }}</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
}
.header .left {
  display: flex;
  align-items: center;
  gap: 24px;
}
.header a,
.header button {
  background: transparent;
  cursor: pointer;
  padding: 18px 50px;
  border-radius: 16px;
  border: 1px solid var(--Grey, #5d5d5f);
  color: var(--Grey, #5d5d5f);
  font-family: var(--semi);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  transition: 0.4s;
}
.header a:hover,
.header button:hover {
  background: #3c4bdc;
  color: white;
  border-color: #3c4bdc;
}
.header a.nuxt-link-exact-active,
.header a.nuxt-link-active {
  background: #3c4bdc;
  color: white;
  border-color: #3c4bdc;
}
</style>
