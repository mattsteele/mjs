<template>
  <div class="venue-wrapper">
    <h1>Venue</h1>
    <img src="@/assets/images/downtown-golden.jpg" alt="The Rose">

      <a class="address-wrapper" href="https://goo.gl/maps/7iMv9MtTRtQ5Q8FL6">
        <div class="address-one">The Rose</div>
        <div class="address-two">1119 Washington Ave</div>
        <div class="address-three">Golden, CO 80401</div>
      </a>
      <p><a href="https://buffalorosegolden.com/weddings/">The Rose</a> in downtown Golden, Colorado will be the location for both the ceremony and the reception.</p>
      <hr />

 

    <div class="parking-wrapper">
      <h1>Parking</h1>
      <p>There is a free, covered public parking garage directly behind the venue.</p>
      <img 
        class="parking-image"
        src="@/assets/images/parking.png" 
        alt="Parking"
      >
    </div><!-- parking-wrapper -->

    <h2><a href="https://www.thedenverear.com/opportunities-enjoy-golden/">Things to do in Golden</a></h2>
  </div><!-- venue-wrapper -->
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
      margin-bottom: 4rem;
    }
    .address-wrapper {
      display: block;
      margin-top: 2rem;
      margin-bottom: 2rem;
      text-decoration: none;
      font-size: 28px;
      .address-one {
        font-weight: bold;
      }   
    }
    .parking-wrapper {
      .parking-image {
        max-width: 50%;
      }
    }   
    // mobile view
		@media only screen and (max-width: 760px) { 
      max-width: 100vw;
      padding: 0 2rem;
      .parking-wrapper {
        .parking-image {
          max-width: 100%;
        }
      }
    }
  }

</style>