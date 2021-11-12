<template>
  <div class="venue-wrapper">
    <h1>Venue</h1>
    <img src="@/assets/images/downtown-golden.jpg" alt="The Rose">
    <p><a href="https://buffalorosegolden.com/weddings/">The Rose</a> in downtown Golden, Colorado will be the location for both the ceremony and the reception.</p>
    <h2><a href="https://www.thedenverear.com/opportunities-enjoy-golden/">Things to do in Golden</a></h2>
  </div>
</template>

<script>
  export default {
    name: "Venue"
  }
</script>

<style lang="scss">
  .venue-wrapper {
    max-width: 70vw;
    margin: 0 auto;
    padding-top: 3rem;
    h1 {
      text-align: center;
    }
    h1, h2 {
      color: var(--color-blue);
    }
    // mobile view
		@media only screen and (max-width: 760px) { 
      max-width: 100vw;
      padding: 0 2rem;
    }
  }

</style>