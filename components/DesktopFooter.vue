<template>
  <div class="wrap">
    <div class="container">
      <div class="cardo">
        <img src="@/assets/img/vector-left.png" alt="" class="vector-left" />
        <div class="container small">
          <div class="top">
            <h4 class="title">
              <img src="@/assets/img/white.svg" alt="" class="brand" />
            </h4>
          </div>
          <div class="grid">
            <div class="col">
              <p class="sup">
                {{ $store.state.translations["usefull_links"] }}
              </p>
              <ul>
                <li>
                  <a
                    href="https://uzbektourism.uz/"
                    target="_blank"
                    class="link"
                  >
                    {{ $store.state.translations["tourism_agency"] }}</a
                  >
                </li>
                <li>
                  <a href="https://pm.gov.uz/oz#/" target="_blank" class="link">
                    {{ $store.state.translations["president_reseption"] }}
                  </a>
                </li>
                <li>
                  <a href="https://my.gov.uz/oz" target="_blank" class="link">
                    {{ $store.state.translations["services_center"] }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="col"></div>
            <div class="col">
              <p class="sup">
                {{ $store.state.translations["contacts"] }}
              </p>
              <ul>
                <li>
                  <a href="#" class="con">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M14.3866 3.22501C18.1916 3.22501 21.2756 6.30901 21.2756 10.114M14.3866 6.76501C16.2356 6.76501 17.7356 8.26401 17.7356 10.114M9.60562 14.865C10.5056 15.728 11.5606 16.43 12.7266 16.928L13.2456 17.149L14.8406 15.529C15.2366 15.127 15.8096 14.953 16.3626 15.069L20.2266 15.878C20.8806 16.017 21.3476 16.594 21.3476 17.262V20.044C21.3476 21.039 20.5416 21.845 19.5466 21.845H18.6916C14.7576 21.845 10.8756 20.542 7.93962 17.924C7.69762 17.709 7.46262 17.486 7.23362 17.258L7.27062 17.295C7.04162 17.066 6.81962 16.831 6.60462 16.589C3.98562 13.654 2.68262 9.77201 2.68262 5.83801V4.98301C2.68262 3.98801 3.48862 3.18201 4.48362 3.18201H7.26562C7.93362 3.18201 8.51062 3.64901 8.64962 4.30301L9.45962 8.16701C9.57462 8.71901 9.40162 9.29301 8.99962 9.68901L7.37962 11.284L7.60062 11.803C8.09862 12.968 8.74162 13.965 9.60562 14.865Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    +998 71 205-06-00
                  </a>
                </li>
                <li>
                  <a href="#" class="con">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <rect
                        x="2"
                        y="3.5"
                        width="20"
                        height="18"
                        rx="4"
                        stroke="white"
                        stroke-width="1.5"
                      />
                      <path
                        d="M2 7.5L9.50122 13.501C10.9621 14.6697 13.0379 14.6697 14.4988 13.501L22 7.5"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    tourismcommittee@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#" class="con">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="11.5"
                        r="3"
                        stroke="white"
                        stroke-width="1.5"
                      />
                      <path
                        d="M21 11.3889C21 16.2981 15.375 22.5 12 22.5C8.625 22.5 3 16.2981 3 11.3889C3 6.47969 7.02944 2.5 12 2.5C16.9706 2.5 21 6.47969 21 11.3889Z"
                        stroke="white"
                        stroke-width="1.5"
                      />
                    </svg>
                    O‘zbekiston Respublikasi Ekologiya, atrof-muhitni muhofaza
                    qilish va iqlim o‘zgarishi vazirligi huzuridagi Turizm
                    qo‘mitasi
                  </a>
                </li>
              </ul>
            </div>
            <div class="col">
              <p class="sup">{{ $store.state.translations["phone_num"] }}</p>
              <ul>
                <li>
                  <a href="#" class="tel">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M14.3866 2.72501C18.1916 2.72501 21.2756 5.80901 21.2756 9.61401M14.3866 6.26501C16.2356 6.26501 17.7356 7.76401 17.7356 9.61401M9.60562 14.365C10.5056 15.228 11.5606 15.93 12.7266 16.428L13.2456 16.649L14.8406 15.029C15.2366 14.627 15.8096 14.453 16.3626 14.569L20.2266 15.378C20.8806 15.517 21.3476 16.094 21.3476 16.762V19.544C21.3476 20.539 20.5416 21.345 19.5466 21.345H18.6916C14.7576 21.345 10.8756 20.042 7.93962 17.424C7.69762 17.209 7.46262 16.986 7.23362 16.758L7.27062 16.795C7.04162 16.566 6.81962 16.331 6.60462 16.089C3.98562 13.154 2.68262 9.27201 2.68262 5.33801V4.48301C2.68262 3.48801 3.48862 2.68201 4.48362 2.68201H7.26562C7.93362 2.68201 8.51062 3.14901 8.64962 3.80301L9.45962 7.66701C9.57462 8.21901 9.40162 8.79301 8.99962 9.18901L7.37962 10.784L7.60062 11.303C8.09862 12.468 8.74162 13.465 9.60562 14.365Z"
                        stroke="#00CD69"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span> +998 71 </span>
                    205-06-00
                  </a>
                </li>
                <li>
                  <a href="#" class="tel">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M14.3866 2.72501C18.1916 2.72501 21.2756 5.80901 21.2756 9.61401M14.3866 6.26501C16.2356 6.26501 17.7356 7.76401 17.7356 9.61401M9.60562 14.365C10.5056 15.228 11.5606 15.93 12.7266 16.428L13.2456 16.649L14.8406 15.029C15.2366 14.627 15.8096 14.453 16.3626 14.569L20.2266 15.378C20.8806 15.517 21.3476 16.094 21.3476 16.762V19.544C21.3476 20.539 20.5416 21.345 19.5466 21.345H18.6916C14.7576 21.345 10.8756 20.042 7.93962 17.424C7.69762 17.209 7.46262 16.986 7.23362 16.758L7.27062 16.795C7.04162 16.566 6.81962 16.331 6.60462 16.089C3.98562 13.154 2.68262 9.27201 2.68262 5.33801V4.48301C2.68262 3.48801 3.48862 2.68201 4.48362 2.68201H7.26562C7.93362 2.68201 8.51062 3.14901 8.64962 3.80301L9.45962 7.66701C9.57462 8.21901 9.40162 8.79301 8.99962 9.18901L7.37962 10.784L7.60062 11.303C8.09862 12.468 8.74162 13.465 9.60562 14.365Z"
                        stroke="#00CD69"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span> +998 71 </span>
                    205-06-00
                  </a>
                </li>
                <li>
                  <a href="#" class="tel">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M14.3866 2.72501C18.1916 2.72501 21.2756 5.80901 21.2756 9.61401M14.3866 6.26501C16.2356 6.26501 17.7356 7.76401 17.7356 9.61401M9.60562 14.365C10.5056 15.228 11.5606 15.93 12.7266 16.428L13.2456 16.649L14.8406 15.029C15.2366 14.627 15.8096 14.453 16.3626 14.569L20.2266 15.378C20.8806 15.517 21.3476 16.094 21.3476 16.762V19.544C21.3476 20.539 20.5416 21.345 19.5466 21.345H18.6916C14.7576 21.345 10.8756 20.042 7.93962 17.424C7.69762 17.209 7.46262 16.986 7.23362 16.758L7.27062 16.795C7.04162 16.566 6.81962 16.331 6.60462 16.089C3.98562 13.154 2.68262 9.27201 2.68262 5.33801V4.48301C2.68262 3.48801 3.48862 2.68201 4.48362 2.68201H7.26562C7.93362 2.68201 8.51062 3.14901 8.64962 3.80301L9.45962 7.66701C9.57462 8.21901 9.40162 8.79301 8.99962 9.18901L7.37962 10.784L7.60062 11.303C8.09862 12.468 8.74162 13.465 9.60562 14.365Z"
                        stroke="#00CD69"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span> +998 71 </span>
                    205-06-00
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img src="@/assets/img/vector-right.png" alt="" class="vector-right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.brand {
  width: 180px;
}
.wrap {
  padding-bottom: 74px;
}
.cardo {
  border-radius: 32px;
  background: var(--Blue-dark, #002856);
  padding: 48px 0 68px 0;
  position: relative;
}
.vector-left {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.vector-right {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}
.title {
  color: var(--White, var(--White, #fff));
  text-align: center;
  font-family: var(--decor);
  font-size: var(--24);
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
  text-transform: uppercase;
}
.title span {
  color: var(--White, var(--White, #fff));
  font-family: var(--decor);
  font-size: var(--20);
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  text-transform: lowercase;
  background: var(--Green, #009a10);
  padding: 0 3px;
  transform: translateY(-8px);
  display: inline-flex;
}
.grid {
  display: grid;
  grid-template-columns: 3fr 1fr 4fr 2fr;
  margin-top: 56px;
}
.sup {
  color: #889fba;
  font-size: var(--16);
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  margin-bottom: 20px;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.link {
  color: var(--White, var(--White, #fff));
  font-size: var(--18);
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  font-family: var(--regular);
  position: relative;
  padding-left: 16px;
  display: flex;
  max-width: 325px;
}
.link::after {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: var(--Green, #009a10);
}
.con {
  color: var(--White, var(--White, #fff));
  font-size: var(--18);
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  font-family: var(--regular);
  display: grid;
  grid-template-columns: 0.7fr 9.3fr;
  align-items: center;
}
.grid .col:last-child {
  padding-left: 12px;
}
.tel {
  color: var(--White, var(--White, #fff));
  font-family: var(--semi);
  font-size: var(--20);
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  display: flex;
  align-items: center;
  gap: 10px;
}
.tel span {
  color: #00cd69;
}
@media screen and (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    margin-top: 24px;
    padding: 0 24px;
  }
  .col:nth-child(2) {
    display: none;
  }
  .title {
    font-size: var(--14);
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
  .title span {
    font-size: var(--12);
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    transform: translateY(-4px);
  }
  .cardo {
    padding: 24px 0;
    border-radius: 20px;
  }
  .sup {
    font-size: var(--14);
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 16px;
  }
  .link,
  .con,
  .tel {
    font-size: var(--16);
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
  ul {
    gap: 16px;
  }
  .vector-left {
    width: 120px;
    top: 0;
    transform: translateY(0);
  }
  .vector-right {
    width: 120px;
    bottom: 0;
    transform: translateY(100%);
  }
  .con {
    gap: 8px;
  }
  .wrap {
    padding-bottom: 40px;
  }
}
</style>
