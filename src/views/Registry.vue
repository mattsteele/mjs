<template>
  <div class="registry-wrapper">
    <h1>Registry</h1>

    <img src="@/assets/images/europe-road-trip.jpg" alt="">

    <p>Once the world fully opens back up, we're hoping to take a long road trip across Europe...</p>
      
      <p>As a couple, we have already established a beautiful home together. In lieu of gifts, we would love your help sending us on the honeymoon of our dreams.</p>
      <p>If you would like, you can contribute <a href="">here</a>.</p>
  </div>
</template>

<script>
  export default {
    name: "Registry"
  }
</script>

<style lang="scss">
  .registry-wrapper {
    max-width: 70vw;
    margin: 0 auto;
    padding-top: 3rem;
    h1 {
      text-align: center;
      margin-bottom: 4rem;
    }
    img {
      display: block;
      margin: 5rem auto;
    }
    // mobile view
		@media only screen and (max-width: 760px) {
      max-width: 100vw;
      padding: 0 2rem;
      img {
        max-width: 100%;
      }
    }
  }

</style>