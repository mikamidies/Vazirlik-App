<template>
  <div class="wrap">
    <div class="container small">
      <div class="left">
        <h4 class="title">Oilaviy Mehmon Uylari Yagona Reyestri</h4>
        <p class="txt">
          Lorem ipsum dolor sit amet consectetur. Egestas fringilla turpis ut id
          mattis. Suspendisse fusce eget non justo tristique. Malesuada massa
          nec aenean feugiat cursus tellus in. Ac feugiat donec sit tincidunt
          bibendum eget auctor. Vitae convallis odio sed egestas nulla varius.
          At habitant tortor interdum tortor mi velit pretium diam.
        </p>
        <p class="second">
          Maecenas pulvinar in duis risus risus auctor bibendum nulla. Sagittis
          eu elementum posuere nunc quam proin cum. Consectetur maecenas nisi
          vitae ultricies nulla quis mi. Tellus amet sed enim sit quam. Nunc
          feugiat egestas luctus odio ipsum ipsum lorem. Viverra purus vitae in
          habitant vel.
        </p>
      </div>
      <div class="right">
        <img src="@/assets/img/about.png" alt="" class="pic" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  padding: 64px 0;
}
.container {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
}
.title {
  color: var(--Blue-dark, #002856);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 38.4px */
  margin-bottom: 24px;
  max-width: 380px;
  font-family: var(--medium);
}
.txt {
  color: var(--Black, #020105);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  margin-bottom: 20px;
}
.second {
  color: var(--Black, #020105);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  padding-left: 8px;
  border-left: 4px solid #3c4bdc;
}
</style>
