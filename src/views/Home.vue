<template>
  <div class="home-wrapper">
    <div class="link-wrapper">
      <router-link to="/">
        <img
          class="monogram"
          src="@/assets/images/jm_monogram.svg"
          alt="Logo"
        >
      </router-link>
    </div><!-- link-wrapper -->
    <h1 class="title">Jessica & Matt</h1>
    <img
      src="@/assets/images/side.jpg"
      alt="Holding Hands"
    >
    <div class="intro-wrapper">
    <p> Intro lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae consequuntur error iure, laborum et quod? Molestiae at labore cupiditate praesentium et enim vitae soluta commodi laboriosam porro? Dolorem exercitationem dignissimos quo delectus odio! Tempora, eligendi explicabo iusto magni pariatur aliquam.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style lang="scss" scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  .link-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
    .monogram {
      max-width: 400px;
    }
  }
  .title {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
  img {
    max-width: 40%;
  }
  .intro-wrapper {
    width: 60vw;
    margin: 0 auto;
  }
  // mobile view
  @media only screen and (max-width: 760px) {
    img {
      max-width: 100%;
    }
    .intro-wrapper{
      width: 90vw;
      padding: 2rem .5rem;
    }
  }
}
</style>