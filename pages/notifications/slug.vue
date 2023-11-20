<template>
  <div class="master">
    <SiteTop :title="title" />
    <div class="container">
      <div class="body">
        <h4>Barcha oilaviy mehmon uyi egalari diqqatiga</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nisl nunc neque ultricies amet
          porttitor. Tortor cursus blandit sodales odio sed purus volutpat. In
          in vivamus pretium cras urna donec vulputate at. Euismod diam eleifend
          nisi enim neque sagittis tellus. Tellus at dignissim justo eu porta.
          Leo metus viverra fermentum lorem nec velit scelerisque. Risus
          fringilla non eleifend quam ut ornare erat aliquam augue. Donec nec
          pulvinar feugiat egestas habitasse facilisi elit mi cras.
        </p>
        <p>
          Mauris sed sodales tempor pharetra commodo et massa scelerisque
          elementum. Amet quisque suscipit quam cursus in morbi at pellentesque.
          Amet est pharetra donec fusce justo egestas suspendisse turpis.
          Tincidunt nisl tellus nibh eu nisi justo. Sagittis porta ultricies
          volutpat quis amet mi.
        </p>
        <p>
          Porttitor lobortis erat nulla aliquet et. Cursus turpis ipsum
          convallis sit scelerisque sed et sit vel. Nisl vestibulum sed in morbi
          sagittis sit. Sem nisi at felis tellus est mauris semper a. Mi
          faucibus lacinia venenatis pulvinar nibh eu. Sit fermentum ac aliquam
          placerat tellus. Urna a id nunc integer. Auctor tincidunt velit libero
          maecenas tortor feugiat semper nisl diam. Nulla arcu porttitor aenean
          praesent vitae nullam cras. Arcu bibendum sit felis imperdiet mi
          dolor. Sit fermentum viverra platea viverra nulla et
        </p>
        <img src="@/assets/img/post.jpg" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Nisl nunc neque ultricies amet
          porttitor. Tortor cursus blandit sodales odio sed purus volutpat. In
          in vivamus pretium cras urna donec vulputate at. Euismod diam eleifend
          nisi enim neque sagittis tellus. Tellus at dignissim justo eu porta.
          Leo metus viverra fermentum lorem nec velit scelerisque. Risus
          fringilla non eleifend quam ut ornare erat aliquam augue. Donec nec
          pulvinar feugiat egestas habitasse facilisi elit mi cras.
        </p>
        <p>
          Mauris sed sodales tempor pharetra commodo et massa scelerisque
          elementum. Amet quisque suscipit quam cursus in morbi at pellentesque.
          Amet est pharetra donec fusce justo egestas suspendisse turpis.
          Tincidunt nisl tellus nibh eu nisi justo. Sagittis porta ultricies
          volutpat quis amet mi.
        </p>
        <p>
          Porttitor lobortis erat nulla aliquet et. Cursus turpis ipsum
          convallis sit scelerisque sed et sit vel. Nisl vestibulum sed in morbi
          sagittis sit. Sem nisi at felis tellus est mauris semper a. Mi
          faucibus lacinia venenatis pulvinar nibh eu. Sit fermentum ac aliquam
          placerat tellus. Urna a id nunc integer. Auctor tincidunt velit libero
          maecenas tortor feugiat semper nisl diam. Nulla arcu porttitor aenean
          praesent vitae nullam cras. Arcu bibendum sit felis imperdiet mi
          dolor. Sit fermentum viverra platea viverra nulla et
        </p>
      </div>

      <div class="link">
        <NuxtLink to="/list">Oilaviy mehmon uylari ro‘yxati</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Barcha oilaviy mehmon uyi egalari diqqatiga",
    };
  },
};
</script>

<style scoped>
.container {
  padding: 56px 0 112px 0;
}
.container h4 {
  color: var(--Blue-dark, #002856);
  font-family: var(--semi);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
  margin-bottom: 32px;
  display: flex;
  max-width: 952px;
  margin: 0 auto 24px auto;
}
.body {
  max-width: 1200px;
  margin: 0 auto;
}
.body p {
  color: var(--grey-80, #353437);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  display: flex;
  max-width: 952px;
  margin: 0 auto 24px auto;
}
.body img {
  width: 100%;
  height: 620px;
  object-fit: cover;
  border-radius: 32px;
  margin-bottom: 32px;
  display: flex;
}
.link {
  display: flex;
  justify-content: center;
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
}
.link a:hover {
  background: #3c4bdc;
  color: white;
}
@media screen and (max-width: 1024px) {
  .container {
    overflow: hidden;
    padding: 40px 16px;
  }
  .body img {
    height: 198px;
    border-radius: 20px;
  }
}
</style>
