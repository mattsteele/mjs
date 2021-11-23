<template>
  <div class="registry-wrapper">
    <h1>Registry</h1>

    <img src="@/assets/images/europe-road-trip.jpg" alt="">

    <p>Jessica & Matt have already built a beautiful home together over the last few years. Once the world opens back up, we plan on taking a honeymoon traveling through Europe. In lieu of gifts, we would greatly appreciate contributions to help fund that dream trip.</p>
      <p><a href="https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.honeyfund.com%2Fwedding%2Fmattandjessicasteele&data=04%7C01%7C%7C7c69b9125b494139b31008d9ae3fd4a5%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C637732411439235964%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000&sdata=lHvDSQHgcHt293KSH8PTfrkwURKk7fB%2BL9xmDF%2FArks%3D&reserved=0">https://honeyfund.com/wedding/mattandjessicasteele</a></p>
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
    margin-bottom: 5rem;
    h1 {
      text-align: center;
      margin-bottom: 4rem;
    }
    img {
      display: block;
      margin: 5rem auto;
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