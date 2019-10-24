<template>
  <section id="how-it-works">
    <b-row>
      <b-col>
        <h2 class="text-center mb-5">How It Works</h2>
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
        <p class="lead">
          Pharmacies will manage their inventory and declare the availability of
          their medicine
        </p>
        <b-button
          href="https://dawai-ph.herokuapp.com/dashboard"
          target="blank"
          class="btn-accent shadow"
          size="lg"
          block
          pill
          >See it in Action!</b-button
        >
      </b-col>
    </b-row>
    <b-row class="align-items-center justify-content-center my-5">
      <b-col class="mb-3" lg="6" sm="12">
        <b-img alt="Search for Medicine" src="/search.svg" fluid></b-img>
      </b-col>
      <b-col class="my-3" lg="4" sm="12">
        <p class="lead">
          Patients will search for the medicine and automatically be connected
          to the pharmacies’ inventory
        </p>
        <b-button
          href="https://dawai-ph.herokuapp.com/"
          target="blank"
          class="btn-accent shadow"
          size="lg"
          block
          pill
          >Search Now!</b-button
        >
      </b-col>
    </b-row>
    <b-row class="align-items-center justify-content-center my-5">
      <b-col class="mb-3" lg="6" sm="12">
        <b-img alt="Results in a Map" src="/map.svg" fluid></b-img>
      </b-col>
      <b-col class="my-3" lg="4" sm="12">
        <p class="lead">
          Patients will be able to find the nearest pharmacy and get directions
          on a Map
        </p></b-col
      >
    </b-row>
  </section>
</template>

<style scoped>
#how-it-works {
  margin-bottom: 20vh;
}
</style>
