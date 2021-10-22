<template>
  <div class="invitation-wrapper">

    <img src="@/assets/images/savethedate.jpg" alt="Save The Date">

  </div>
</template>

<script>
  export default {
    name: "Invitation"
  }
</script>

<style lang="scss">
  .invitation-wrapper {
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
       max-width: 60%;
    }
  }


</style>