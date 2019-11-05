<template>
  <section id="donate">
    <b-row>
      <b-col>
        <h2 class="text-center mb-3">Help Us Reach Our Goal</h2>
        <p class="lead text-center">
          Dawai is especially dedicated to the patients who live on the
          outskirts and suburbs. They come from a very long distance seeking
          medicine, only to spend months’ worth of salary in a matter of days,
          in expenses for living in the main city, searching pharmacy to
          pharmacy struggling to find the medicine they need.
        </p>
        <b-img
          class="img-fluid"
          src="/farmer.jpg"
          alt="Farmer with goats"
        ></b-img>
        <p class="lead text-center pt-5">
          Help us make this project possible and reach our goal for hosting
          Dawai and paying for variable costs of
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
          <b-progress-bar class="accent" :value="500">
            <strong class="ml-3">10 / 6000 USD</strong>
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
