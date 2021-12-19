<template>
  <div class="venue-wrapper">
    <h1>Venue</h1>
    <img src="@/assets/images/downtown-golden.jpg" alt="The Rose">

      <a class="address-wrapper" href="https://goo.gl/maps/7iMv9MtTRtQ5Q8FL6">
        <div class="address-one">The Rose</div>
        <div class="address-two">1119 Washington Ave</div>
        <div class="address-three">Golden, CO 80401</div>
      </a>
      <p><a href="https://buffalorosegolden.com/weddings/">The Rose</a> in downtown Golden, Colorado will be the location for both the ceremony & the reception.</p>
      <hr />

 

    <div class="parking-wrapper">
      <h1>Parking</h1>
      <p>There are two public parking garages conveniently located within one block of The Rose between Jackson St. & Prospector’s Alley & between 11th and 13th Streets.</p>

      <p>Use the physical address information below for GPS navigation.</p>

      <a class="address-wrapper" href="https://goo.gl/maps/B9S5m2wHuwYrUshT9">
        <div class="address-one">Public Garage 1 (South)</div>
        <div class="address-two">1250 Jackson St.</div>
        <div class="address-three">Golden, CO 80401</div>
      </a>

      <a class="address-wrapper" href="https://goo.gl/maps/yd3rMAJJ9AS9dCDZ8">
        <div class="address-one">Public Garage 2 (North)</div>
        <div class="address-two">702 12th St.</div>
        <div class="address-three">Golden, CO 80401</div>
      </a>
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