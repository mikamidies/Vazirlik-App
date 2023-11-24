<template>
  <div class="wrap">
    <div class="container">
      <div class="cardo">
        <img src="@/assets/img/main.jpg" alt="" class="cover" />
        <img src="@/assets/img/vector-left.png" alt="" class="vector-left" />
        <div class="content">
          <h4 class="title">{{ title }}</h4>
          <div class="crumbs">
            <ol>
              <li>
                <NuxtLink class="last" :to="localePath('/')">
                  {{ $store.state.translations["main"] }}
                </NuxtLink>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M9.50391 6.07007L15.9339 12.5001L9.50391 18.9301"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </li>
              <li>
                <p class="current">{{ title }}</p>
              </li>
            </ol>
          </div>
        </div>
        <img src="@/assets/img/vector-right.png" alt="" class="vector-right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "img"],
};
</script>

<style scoped>
.cardo {
  border-radius: 32px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 313px;
  background: #002856;
  overflow: hidden;
}
.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 32px;
}
.cardo::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #0201056f;
  border-radius: 32px;
}
.title {
  color: var(--White, var(--White, #fff));
  text-align: center;
  font-size: var(--48);
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  position: relative;
  z-index: 8;
  max-width: 745px;
  letter-spacing: 1px;
  margin-bottom: 16px;
}
.vector-left {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 2;
}
.vector-right {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 2;
}
.crumbs ol {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
}
.content {
  position: relative;
  z-index: 2;
}
.last,
.current {
  color: var(--White, var(--White, #fff));
  font-size: var(--18);
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
@media screen and (max-width: 1024px) {
  .cardo {
    min-height: 238px;
    border-radius: 20px;
  }
  .cardo::after {
    border-radius: 20px;
  }
  .title {
    font-size: var(--24);
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    margin: 0 auto;
  }
  .last,
  .current {
    font-size: var(--14);
  }
  .crumbs ol {
    gap: 4px;
  }
  .vector-left {
    top: 0;
    left: 0;
    width: 120px;
  }
  .vector-right {
    display: none;
  }
  .current {
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>
