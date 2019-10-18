<template
  ><section id="home">
    <div class="container mb-5">
      <div class="row align-items-center">
        <div class="col-lg-6 order-2 order-lg-1">
          <h1 class="mb-4">Dawai — The Medicine Platform for Sudan</h1>
          <p class="lead">
            Dawai helps patients looking for medicine by providing a location
            search that shows which Pharmacies have the medicine available
            across Sudan.
          </p>
          <p class="lead">
            Dawai also is a Management solution for Pharmacists and Pharmacy
            owners that would like to increase their sales, view their
            performace and get market predictions!
          </p>
          <p>
            <b-button
              id="popover-target-1"
              href="https://dawai-ph.herokuapp.com"
              class="btn-accent shadow mt-4"
              target="blank"
              size="lg"
              pill
              >Pharmacy Management Demo</b-button
            >
            <b-popover
              target="popover-target-1"
              triggers="hover"
              placement="bottom"
            >
              Still a Work in Progress!
            </b-popover>
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
