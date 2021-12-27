<template>
  <div class="lodging-wrapper">
    <h1>Lodging</h1>
  
    <div class="hotel-wrapper highlight">
      <h3><a href="https://www.tablemountaininn.com/">Table Mountain Inn</a></h3>
      <p>We have a block of 10 rooms at the Table Mountain Inn hotel with a discount. To book a room using the discount call <a href="tel:303-325-3995">303-325-3995</a> and use <span class="bold">group code 183772</span>.</p>
      <p>This hotel is a block & a half from the wedding venue. It features larger rooms, a restaurant & a bar. Adobe Southwestern style.</p>
    </div><!-- hotel-wrapper highlight -->

    <img src="@/assets/images/golden-hotels.png" alt="Golden hotels map">

    <div class="hotel-wrapper">
      <h2>Other Options</h2>
      <p>If the Table Mountain Inn just isn't your style, then here are some other options:</p>
    </div><!-- hotel-wrapper border -->

    <div class="hotel-wrapper border">
      <h3><a href="https://www.thegoldenhotel.com/">The Golden Hotel</a></h3>
      <p>At half a block from the wedding venue, it's the most convienent hotel. Modern, updated & overlooking Clear Creek, but with smaller rooms.</p>
    </div><!-- hotel-wrapper border -->

    <div class="hotel-wrapper border">
      <h3><a href="https://www.theeddygolden.com/">The Eddy Taproom & Hotel</a></h3>
      <p>Cool, hip & modern. It features a brewery & a restaurant. It's 1 mile away from the venue.</p>
    </div><!-- hotel-wrapper border -->

    <div class="hotel-wrapper border">
      <h3><a href="https://www.marriott.com/hotels/travel/denwe-denver-marriott-west/">Marriot</a></h3>
      <p>3 miles from the wedding venue, but if you're racking up Marriot points then here's the closest we could find.</p>
    </div><!-- hotel-wrapper border -->
  </div><!-- lodging-wrapper -->
</template>

<script>
  export default {
    name: "Lodging"
  }
</script>

<style lang="scss">
  .lodging-wrapper {
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
    .hotel-wrapper {
      padding: .5rem;
      &.highlight {
        border: 10px solid var(--color-gold);
        padding-left: 1rem;
        padding-right: 1rem;
        margin-bottom: 2rem;
      }
      .bold {
        font-weight: bold;
      }
      &.border {
        border-bottom: 1px solid var(--color-blue);
        padding-bottom: 2rem;
      }
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