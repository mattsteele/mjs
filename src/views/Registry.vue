<template>
  <div class="registry-wrapper">
    <h1>Registry</h1>

    <p>We are hoping to take a long road trip across Europe, once the world opens back up fully.</p>
      
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
    h1, h2 {
      color: var(--color-blue);
      text-align: center;
    }
    h2 {
      margin-top: 5rem;
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