<template>
  <section id="donate" class="my-5">
    <b-row>
      <b-col>
        <h2 class="text-center my-5">Donate</h2>
        <p class="lead">
          Our goal for hosting Dawai and paying for variable costs is
          <span class="font-weight-bold">$3000</span>. Donating as little as 1
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
            <h6>Osama Adil Alkhair Elnour</h6>
            <h6>0193021136840001</h6>
            <h6>Bank of Khartoum</h6>
          </b-col>
        </b-row>
        <h4 class="text-center mb-5">Progress:</h4>
        <b-progress
          style="border-radius: 50rem; background-color: rgba(200,200,200,0.2);"
          :max="3000"
          height="2.6rem"
          animated
        >
          <b-progress-bar class="accent" :value="100">
            <strong class="secondary--text ml-3">0 / 3000 USD</strong>
          </b-progress-bar>
        </b-progress>
      </b-col>
    </b-row>
  </section>
</template>
