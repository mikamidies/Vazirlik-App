<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">Oilaviy mehmon uylari ro‘yxati</h4>
      <table>
        <tr>
          <th>Reyestr raqami</th>
          <th>Mehmon uyi nomi</th>
          <th>Mehmon uyi joylashgan hudud</th>
          <th>Mehmon uyi manzili</th>
          <th>Mehmon uyi holati</th>
          <th>Mehmon uyi telefon raqami</th>
        </tr>
        <tr>
          <td><p class="strong">000368</p></td>
          <td><p class="strong">Lux Family Guesthouse</p></td>
          <td><p class="weak">Toshkent shahri</p></td>
          <td>
            <p class="weak">
              Toshkent sh, Mirobod tumani, O‘zbekiston ko‘ch, 2-uy
            </p>
          </td>
          <td><p class="status active">Aktiv</p></td>
          <td><p class="num">+998 93 251-56-36</p></td>
        </tr>
        <tr>
          <td><p class="strong">000368</p></td>
          <td><p class="strong">Lux Family Guesthouse</p></td>
          <td><p class="weak">Toshkent shahri</p></td>
          <td>
            <p class="weak">
              Toshkent sh, Mirobod tumani, O‘zbekiston ko‘ch, 2-uy
            </p>
          </td>
          <td><p class="status passive">To‘xtatilgan</p></td>
          <td><p class="num">+998 93 251-56-36</p></td>
        </tr>
        <tr>
          <td><p class="strong">000368</p></td>
          <td><p class="strong">Lux Family Guesthouse</p></td>
          <td><p class="weak">Toshkent shahri</p></td>
          <td>
            <p class="weak">
              Toshkent sh, Mirobod tumani, O‘zbekiston ko‘ch, 2-uy
            </p>
          </td>
          <td><p class="status active">Aktiv</p></td>
          <td><p class="num">+998 93 251-56-36</p></td>
        </tr>
      </table>
      <div class="link">
        <NuxtLink to="/"> Barchasini ko’rish </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  padding-bottom: 112px;
}
.title {
  color: var(--Blue-dark, #002856);
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 57.6px */
  margin-bottom: 32px;
  font-family: var(--medium);
}
.link {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}
.link a {
  color: var(--Agro-Blue, #3c4bdc);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  font-family: var(--medium);
  border-radius: 16px;
  border: 1px solid var(--Agro-Blue, #3c4bdc);
  padding: 18px 50px;
  transition: 0.4s;
}
.link a:hover {
  background: #3c4bdc;
  color: white;
}
table {
  width: 100%;
  border-radius: 8px;
}
table th,
table td {
  padding: 10px 16px;
  border: 1px solid var(--grey-8, #ebebeb);
}
table th {
  color: var(--grey-64, #5d5d5f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  padding: 14px 16px;
}
table tr:nth-child(odd) {
  background: var(--Apple-Grey, #f5f5f7);
}
.strong {
  color: var(--Black, #020105);
  font-family: var(--medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
}
.weak {
  color: var(--grey-80, #353437);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}
.status.active {
  color: var(--Green, #009a10);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  border-radius: 62px;
  background: #d6efd9;
  padding: 6px 22px;
  max-width: 120px;
  margin: 0 auto;
}
.status.passive {
  background: #f4dce2;
  color: #bb2649;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  border-radius: 62px;
  padding: 6px 22px;
  max-width: 120px;
  margin: 0 auto;
}
.num {
  color: var(--Agro-Blue, #3c4bdc);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  text-decoration-line: underline;
}
</style>
