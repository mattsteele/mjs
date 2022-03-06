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

    <a href="https://www.dropbox.com/scl/fo/4qikx2lda75i4pttuj3br/h?dl=0&rlkey=euj39rvw9nvmrbpyw835395tw">LINK</a>
    <img
      src="@/assets/images/side.jpg"
      class="home-image"
      alt="Holding Hands"
    >
    <div class="intro-wrapper">
      <p>Jessica & Matt lived three blocks apart in Denver for years before they met right between their two apartments. Two days later, their first date was watching the Broncos win Super Bowl 50. That was February 7th, 2016 & they’ve never looked back. They’ve grown with each other through tiny apartments, career changes, a pandemic, & learning what it takes to be the best partners in life. Last year they bought their first home together, & adopted Betty Sue Dog, the apple of their eyes. They are so excited to start their new adventure of marriage, & they can’t wait to celebrate their love with their family & friends.</p>
    </div>
      <img
        src="@/assets/images/kids.jpg"
        class="home-image"
        alt="Matt & Jessica as children"
      >
  </div><!-- .home-wrapper -->
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
  margin-bottom: 5rem;
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
  .home-image {
    max-width: 40%;
  }
  .intro-wrapper {
    width: 60vw;
    margin: 2rem auto;
  }
  // mobile view
  @media only screen and (max-width: 760px) {
    .home-image {
      max-width: 90%;
    }
    .intro-wrapper{
      width: 90vw;
      padding: 2rem .5rem;
    }
  }
}
</style>