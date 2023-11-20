<template>
  <div class="master">
    <SiteTop :title="title" />
    <div class="container">
      <div class="cardo">
        <div class="flexer">
          <div class="left">
            <img src="@/assets/img/logo.png" alt="" class="pic" />
          </div>
          <div class="right">
            <div class="items">
              <div class="item">
                <p class="sup">Oilaviy mehmon uyi nomi:</p>
                <p class="name">Hilton</p>
              </div>
              <div class="item">
                <p class="sup">Oilaviy mehmon uyi telefon raqami</p>
                <p class="name">+998 99 909 09 90, +998 33 333 03 33</p>
              </div>
              <div class="item">
                <p class="sup">Oilaviy mehmon uyi veb sayti</p>
                <p class="name">www.hilton.uz</p>
              </div>
              <div class="item">
                <p class="sup">Oilaviy mehmon uyi elektron manzili</p>
                <p class="name">Zaynobiddin2502@mail.ru</p>
              </div>
              <div class="item">
                <p class="sup">Oilaviy mehmon uyi joylashgan hudud</p>
                <p class="name">Toshkent shahri</p>
              </div>
              <div class="item">
                <p class="sup">Tashkilot yuridik nomi</p>
                <p class="name">“Lokomotiv-hostel” MCHJ</p>
              </div>
              <div class="item">
                <p class="sup">STIR</p>
                <p class="name">“Lokomotiv-hostel” MCHJ</p>
              </div>
              <div class="item">
                <p class="sup">Oilaviy mehmon uyi egasi</p>
                <p class="name">Abdullaev Iskandar Yuldashevich</p>
              </div>
              <div class="item">
                <p class="sup">Oilaviy mehmon uyi manzili</p>
                <p class="name">
                  Toshkent shahri, Mirobod tumani, O‘zbekiston ko‘chasi 2-uy
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="link">
          <NuxtLink to="/profile/edit"> Ma‘lumotlarni yangilash </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Mening profilim",
    };
  },
};
</script>

<style scoped>
.container {
  padding: 40px 0 112px 0;
}
.cardo {
  padding: 40px;
  border-radius: 16px;
  background: var(--Apple-Grey, #f5f5f7);
}
.flexer {
  display: grid;
  grid-template-columns: 2fr 8fr;
  gap: 40px;
}
.pic {
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 50%;
  display: flex;
}
.items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 48px;
}
.sup {
  margin-bottom: 8px;
  color: var(--grey-80, #353437);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.name {
  max-width: 464px;
  color: var(--Blue-dark, #002856);
  font-family: var(--semi);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
}
.link {
  display: flex;
  justify-content: center;
  padding-top: 55px;
}
.link a {
  display: flex;
  margin-top: 12px;
  border-radius: 16px;
  border: 1px solid var(--Agro-Blue, #3c4bdc);
  padding: 18px 50px;
  color: var(--Agro-Blue, #3c4bdc);
  font-family: var(--semi);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  transition: 0.4s;
  background: white;
}
.link a:hover {
  background: #3c4bdc;
  color: white;
}
@media screen and (max-width: 1024px) {
  .flexer {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .pic {
    width: 80px;
    height: 80px;
  }
  .left {
    display: flex;
    justify-content: center;
  }
  .items {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .cardo {
    padding: 16px 16px 40px 16px;
  }
  .sup {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 8px;
  }
  .name {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
  .link {
    padding-top: 24px;
  }
  .container {
    padding: 40px 16px;
  }
}
</style>
