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
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
       max-width: 75%;
    }
    // mobile view
		@media only screen and (max-width: 760px) { 
      padding-top: 0;
      img {
        max-width: 100%;
      }
    }
  }


</style>