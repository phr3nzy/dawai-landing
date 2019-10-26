<template>
  <section id="donate">
    <b-row>
      <b-col>
        <h2 class="text-center mb-3">Donate</h2>
        <p class="lead text-center">
          Our goal for hosting Dawai and paying for variable costs is
          <span class="font-weight-bold">$6000</span>. Donating as little as 1
          SDG will help us. You can donate to us through the following bank
          account:
        </p>
        <b-row class="my-5 align-items-center justify-content-center">
          <b-col lg="4">
            <b-img
              class="img-fluid"
              src="/qr.jpg"
              alt="Bank Account QR Code"
            ></b-img>
          </b-col>
          <b-col lg="4">
            <h6 class="text-center">Osama Adil Alkhair Elnour</h6>
            <h6 class="text-center">0193021136840001</h6>
            <h6 class="text-center">Bank of Khartoum</h6>
          </b-col>
        </b-row>
        <h4 class="text-center mb-3">Progress:</h4>
        <b-progress
          style="border-radius: 50rem; background-color: rgba(200,200,200,0.2);"
          :max="6000"
          height="2.6rem"
          animated
        >
          <b-progress-bar class="red" :value="100">
            <strong class="secondary--text ml-3">0 / 6000 USD</strong>
          </b-progress-bar>
        </b-progress>
      </b-col>
      <b-col class="text-center" cols="12">
        <b-button
          class="btn-accent shadow mt-5"
          size="lg"
          href="https://github.com/phr3nzy/dawai#dawais-hosting-costs"
          target="_blank"
          pill
          >Learn More</b-button
        >
      </b-col>
    </b-row>
  </section>
</template>

<style scoped>
#donate {
  margin-bottom: 20vh;
}
</style>
