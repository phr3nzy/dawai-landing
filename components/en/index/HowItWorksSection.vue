<template>
  <section id="how-it-works">
    <b-row>
      <b-col>
        <h2 class="text-center mb-1">How It Works</h2>
      </b-col>
    </b-row>
    <b-row class="align-items-center justify-content-center my-5">
      <b-col class="mb-3" lg="6" sm="12">
        <b-img
          alt="Pharmacy Management"
          src="/pharmacy-management.svg"
          fluid
        ></b-img>
      </b-col>
      <b-col class="my-3" lg="4" sm="12">
        <p class="lead text-center">
          Pharmacies will manage their inventory and declare the availability of
          their medicine
        </p>
        <b-row class="align-items-center justify-content-center">
          <b-button
            href="https://dawai-ph.herokuapp.com/dashboard"
            target="_blank"
            class="btn-accent shadow"
            size="lg"
            pill
            >See it in Action!</b-button
          >
        </b-row>
      </b-col>
    </b-row>
    <b-row class="align-items-center justify-content-center my-5">
      <b-col class="mb-3" lg="6" sm="12">
        <b-img alt="Search for Medicine" src="/search.svg" fluid></b-img>
      </b-col>
      <b-col class="my-3" lg="4" sm="12">
        <p class="lead text-center">
          Patients will search for the medicine and automatically be connected
          to the pharmacies’ inventory
        </p>
        <b-row class="align-items-center justify-content-center">
          <b-button
            href="https://dawai-ph.herokuapp.com/"
            target="_blank"
            class="btn-accent shadow"
            size="lg"
            pill
            >Search Now!</b-button
          >
        </b-row>
      </b-col>
    </b-row>
    <b-row class="align-items-center justify-content-center my-5">
      <b-col class="mb-3" lg="6" sm="12">
        <b-img alt="Results in a Map" src="/map.svg" fluid></b-img>
      </b-col>
      <b-col class="my-3" lg="4" sm="12">
        <p class="lead text-center">
          Patients will be able to find the nearest pharmacy and get directions
          on a Map
        </p></b-col
      >
    </b-row>
    <b-row class="align-items-center justify-content-center mt-5 pt-5">
      <p class="lead">Are you a pharmacy owner? Interested in joining Dawai?</p>
    </b-row>
    <b-row class="align-items-center justify-content-center">
      <p class="lead">
        Join us now by filling the form below and earn our early subscriber
        gift!
      </p>
    </b-row>
    <b-row class="align-items-center justify-content-center">
      <b-button
        href="https://x249.typeform.com/to/Kd482p"
        target="_blank"
        class="btn-accent shadow"
        size="lg"
        pill
        >Join us Now!</b-button
      >
    </b-row>
  </section>
</template>

<style scoped>
#how-it-works {
  margin-bottom: 20vh;
}
</style>
