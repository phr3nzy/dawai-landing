<template
  ><section id="home">
    <div class="container mb-5">
      <div class="row align-items-center">
        <div class="col-lg-6 order-2 order-lg-1">
          <h1 class="mb-4">Sudan's First Online Medicine Finder</h1>
          <p class="lead">
            Dawai helps patients find medicine by connecting them directly to
            the pharmacies' inventory.
          </p>
          <p class="lead">
            Help us reach our goal by donating!
          </p>
          <p>
            <b-button
              id="popover-target-1"
              to="#donate"
              class="text-uppercase btn-accent shadow mt-4"
              size="lg"
              pill
              >Donate Now</b-button
            >
            <!-- <b-popover
              target="popover-target-1"
              triggers="hover"
              placement="bottom"
            >
              Still a Work in Progress!
            </b-popover> -->
          </p>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 mb-5">
          <img
            src="/sudan-map-green.svg"
            alt="Locate medicine all over Sudan!"
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#home {
  margin-bottom: 20vh;
}
</style>
