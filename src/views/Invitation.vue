<template>
  <div class="invitation-wrapper">

    <img src="@/assets/images/invitation.jpg" width="2700px" alt="Wedding Invitation">

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
    img {
      display: block;
      margin: 5rem auto;
    }
    // mobile view
		@media only screen and (max-width: 760px) { 
      max-width: initial;
        img {
          margin: 0 auto;
          max-width: 90%;
        }
    }
  }


</style>