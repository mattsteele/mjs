<template>
  <div class="invitation-wrapper">

    <img src="@/assets/images/invitation.jpg" alt="Wedding Invitation">

  </div>
</template>

<script>
  export default {
    name: "Invitation"
  }
</script>

<style lang="scss">
  .invitation-wrapper {
    max-width: 70vw;
    margin: 0 auto;
    padding-top: 3rem;  
    // mobile view
		@media only screen and (max-width: 760px) { 
      max-width: 100vw;
      padding: 0 2rem;
    }
  }


</style>