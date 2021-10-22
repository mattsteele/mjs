<template>
  <div class="location-wrapper">
    <h1>Location</h1>
    <img src="@/assets/images/rose-outside.png" alt="The Rose">
    <p><a href="https://buffalorosegolden.com/weddings/">The Rose</a> in downtown Golden, Colorado will be the location for both the ceremony and the reception.</p>

    <h2><a href="https://www.thedenverear.com/opportunities-enjoy-golden/">Things to do in Golden</a></h2>
  </div>
</template>

<script>
  export default {
    name: "Location"
  }
</script>

<style lang="scss">
  .location-wrapper {
    max-width: 70vw;
    margin: 2rem auto;
    padding: 2rem 5rem;
    h1 {
      text-align: center;
    }
    h1, h2 {
      color: var(--color-blue);
    }
  }

</style>