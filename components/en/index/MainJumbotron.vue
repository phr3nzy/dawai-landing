<template
  ><section id="home">
    <div class="container mb-5">
      <div class="row align-items-center">
        <div class="col-lg-6 order-2 order-lg-1">
          <h1 class="mb-4 text-center">
            Finding Medicine has never been so Easy
          </h1>
          <p class="lead text-center">
            Dawai helps patients find the location of medicine online easily,
            and as fast as possible
          </p>
          <p class="lead text-center">
            Help us reach our goal by donating!
          </p>
          <b-row class="align-items-center justify-content-center">
            <b-button
              to="/#donate"
              class="text-uppercase text-center btn-accent shadow mt-4"
              size="lg"
              pill
              >Donate Now</b-button
            >
          </b-row>
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
