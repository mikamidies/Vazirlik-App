<template>
  <div class="master">
    <SiteTop :title="title" />
    <div class="container">
      <div class="items">
        <div class="item">
          <p class="sup">{{ $store.state.translations["one_number"] }}</p>
          <p class="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.3876 2.72513C18.1926 2.72513 21.2766 5.80913 21.2766 9.61413M14.3876 6.26513C16.2366 6.26513 17.7366 7.76413 17.7366 9.61413M9.60659 14.3651C10.5066 15.2281 11.5616 15.9301 12.7276 16.4281L13.2466 16.6491L14.8416 15.0291C15.2376 14.6271 15.8106 14.4531 16.3636 14.5691L20.2276 15.3781C20.8816 15.5171 21.3486 16.0941 21.3486 16.7621V19.5441C21.3486 20.5391 20.5426 21.3451 19.5476 21.3451H18.6926C14.7586 21.3451 10.8766 20.0421 7.94059 17.4241C7.69859 17.2091 7.46359 16.9861 7.23459 16.7581L7.27159 16.7951C7.04259 16.5661 6.82059 16.3311 6.60559 16.0891C3.98659 13.1541 2.68359 9.27213 2.68359 5.33813V4.48313C2.68359 3.48813 3.48959 2.68213 4.48459 2.68213H7.26659C7.93459 2.68213 8.51159 3.14913 8.65059 3.80313L9.46059 7.66713C9.57559 8.21913 9.40259 8.79313 9.00059 9.18913L7.38059 10.7841L7.60159 11.3031C8.09959 12.4681 8.74259 13.4651 9.60659 14.3651Z"
                stroke="#00CD69"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            (0-371) 200-00-88; 1163
          </p>
        </div>
        <div class="item">
          <p class="sup">{{ $store.state.translations["trust_number"] }}</p>
          <p class="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.3876 2.72513C18.1926 2.72513 21.2766 5.80913 21.2766 9.61413M14.3876 6.26513C16.2366 6.26513 17.7366 7.76413 17.7366 9.61413M9.60659 14.3651C10.5066 15.2281 11.5616 15.9301 12.7276 16.4281L13.2466 16.6491L14.8416 15.0291C15.2376 14.6271 15.8106 14.4531 16.3636 14.5691L20.2276 15.3781C20.8816 15.5171 21.3486 16.0941 21.3486 16.7621V19.5441C21.3486 20.5391 20.5426 21.3451 19.5476 21.3451H18.6926C14.7586 21.3451 10.8766 20.0421 7.94059 17.4241C7.69859 17.2091 7.46359 16.9861 7.23459 16.7581L7.27159 16.7951C7.04259 16.5661 6.82059 16.3311 6.60559 16.0891C3.98659 13.1541 2.68359 9.27213 2.68359 5.33813V4.48313C2.68359 3.48813 3.48959 2.68213 4.48459 2.68213H7.26659C7.93459 2.68213 8.51159 3.14913 8.65059 3.80313L9.46059 7.66713C9.57559 8.21913 9.40259 8.79313 9.00059 9.18913L7.38059 10.7841L7.60159 11.3031C8.09959 12.4681 8.74259 13.4651 9.60659 14.3651Z"
                stroke="#00CD69"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            (0-371) 200-00-88
          </p>
        </div>
        <div class="item">
          <p class="sup">{{ $store.state.translations["dev_number"] }}</p>
          <p class="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.3876 2.72513C18.1926 2.72513 21.2766 5.80913 21.2766 9.61413M14.3876 6.26513C16.2366 6.26513 17.7366 7.76413 17.7366 9.61413M9.60659 14.3651C10.5066 15.2281 11.5616 15.9301 12.7276 16.4281L13.2466 16.6491L14.8416 15.0291C15.2376 14.6271 15.8106 14.4531 16.3636 14.5691L20.2276 15.3781C20.8816 15.5171 21.3486 16.0941 21.3486 16.7621V19.5441C21.3486 20.5391 20.5426 21.3451 19.5476 21.3451H18.6926C14.7586 21.3451 10.8766 20.0421 7.94059 17.4241C7.69859 17.2091 7.46359 16.9861 7.23459 16.7581L7.27159 16.7951C7.04259 16.5661 6.82059 16.3311 6.60559 16.0891C3.98659 13.1541 2.68359 9.27213 2.68359 5.33813V4.48313C2.68359 3.48813 3.48959 2.68213 4.48459 2.68213H7.26659C7.93459 2.68213 8.51159 3.14913 8.65059 3.80313L9.46059 7.66713C9.57559 8.21913 9.40259 8.79313 9.00059 9.18913L7.38059 10.7841L7.60159 11.3031C8.09959 12.4681 8.74259 13.4651 9.60659 14.3651Z"
                stroke="#00CD69"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            (998) 71 - 205-55-09
          </p>
        </div>
        <div class="item">
          <p class="sup">{{ $store.state.translations["email"] }}</p>
          <p class="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                x="2"
                y="3"
                width="20"
                height="18"
                rx="4"
                stroke="#00B55D"
                stroke-width="1.5"
              />
              <path
                d="M2 7L9.50122 13.001C10.9621 14.1697 13.0379 14.1697 14.4988 13.001L22 7"
                stroke="#00B55D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            info@motach.uz
          </p>
        </div>
        <div class="item">
          <p class="sup">{{ $store.state.translations["address"] }}</p>
          <p class="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 10.8889C21 15.7981 15.375 22 12 22C8.625 22 3 15.7981 3 10.8889C3 5.97969 7.02944 2 12 2C16.9706 2 21 5.97969 21 10.8889Z"
                stroke="#00B55D"
                stroke-width="1.5"
              />
              <path
                d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                stroke="#00B55D"
                stroke-width="1.5"
              />
            </svg>
            O'zbekiston Respublikasi,Toshkent, 100084, Amir Temur shoh ko‘chasi
            107B
          </p>
        </div>
        <div class="item">
          <p class="sup">{{ $store.state.translations["work_time"] }}</p>
          <p class="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 7.5C3 5.29086 4.79086 3.5 7 3.5H17C19.2091 3.5 21 5.29086 21 7.5V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V7.5Z"
                stroke="#00B55D"
                stroke-width="1.5"
              />
              <path
                d="M3 9H21"
                stroke="#00B55D"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M8 2L8 5"
                stroke="#00B55D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 2V5"
                stroke="#00B55D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle cx="12" cy="15" r="1" fill="#00B55D" />
              <circle cx="16" cy="15" r="1" fill="#00B55D" />
              <circle cx="8" cy="15" r="1" fill="#00B55D" />
            </svg>
            09:00 dan 18:00 gacha
          </p>
        </div>
      </div>
      <div class="map">
        <div style="position: relative; overflow: hidden">
          <a
            href="https://yandex.uz/maps/org/172769933675/?utm_medium=mapframe&utm_source=maps"
            style="color: #eee; font-size: 12px; position: absolute; top: 0px"
            >Государственный комитет Республики Узбекистан по экологии и охране
            окружающей среды</a
          ><a
            href="https://yandex.uz/maps/10335/tashkent/category/government_ministries_services/184105716/?utm_medium=mapframe&utm_source=maps"
            style="color: #eee; font-size: 12px; position: absolute; top: 14px"
            >Министерства, ведомства, государственные службы в Ташкенте</a
          ><iframe
            src="https://yandex.uz/map-widget/v1/?ll=69.320842%2C41.291932&mode=search&oid=172769933675&ol=biz&sctx=ZAAAAAgBEAAaKAoSCcueBDbnUVFAERGPxMvTp0RAEhIJTl5kAn6N3z8RCHQmbaruyz8iBgABAgMEBSgKOABA1boGSAFqAnV6nQHNzEw9oAEAqAEAvQEhcB5DwgEL6%2FKPz4MFm4fymifqAQDyAQD4AQCCAoEBT%2BKAmHpiZWtpc3RvbiBSZXNwdWJsaWthc2kgRWtvbG9naXlhLCBhdHJvZi1tdWhpdG5pIG11aG9mYXphIHFpbGlzaCB2YSBpcWxpbSBv4oCYemdhcmlzaGkgdmF6aXJsaWdpIGh1enVyaWRhZ2kgVHVyaXptIHFv4oCYbWl0YXNpigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=69.320842%2C41.291932&sspn=0.157211%2C0.095014&text=O%E2%80%98zbekiston%20Respublikasi%20Ekologiya%2C%20atrof-muhitni%20muhofaza%20qilish%20va%20iqlim%20o%E2%80%98zgarishi%20vazirligi%20huzuridagi%20Turizm%20qo%E2%80%98mitasi&z=13.2"
            width="560"
            height="400"
            frameborder="1"
            allowfullscreen="true"
            style="position: relative"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$store.state.translations["contacts"],
    };
  },
};
</script>

<style scoped>
.container {
  padding: 72px 0 112px 0;
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  column-gap: 24px;
  margin-bottom: 72px;
}
.item {
  border-radius: 8px;
  background: var(--Apple-Grey, #f5f5f7);
  padding: 32px 22px;
  border-left: 5px solid #3c4bdc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 120px;
}
.sup {
  color: var(--grey-80, #353437);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  margin-bottom: 8px;
}
.text {
  color: var(--Blue-dark, #002856);
  font-family: var(--semi);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  display: flex;
  align-items: center;
  gap: 4px;
}
.link {
  display: grid;
  grid-template-columns: 0.7fr 9.3fr;
  align-items: center;
  color: var(--Agro-Blue, #3c4bdc);
  font-family: var(--semi);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
}
.link span {
  display: flex;
}
.map iframe {
  width: 100%;
  height: 642px;
  border-radius: 32px;
}
@media screen and (max-width: 1024px) {
  .container {
    padding: 40px 16px;
  }
  .items {
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 40px;
  }
  .sup {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    margin-bottom: 4px;
  }
  .text,
  .link {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    gap: 8px;
  }
  .item {
    padding: 16px;
    border-radius: 10px;
  }
  .map iframe {
    height: 366px;
    border-radius: 20px;
  }
}
</style>
