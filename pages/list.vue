<template>
  <div class="master">
    <SiteTop :title="title" />

    <div class="container">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Oilaviy mehmon uylari ro‘yxati",
    };
  },
};
</script>

<style scoped>
@import url(@/assets/css/table.css);
.container {
  margin: 40px auto 112px auto;
}
</style>
