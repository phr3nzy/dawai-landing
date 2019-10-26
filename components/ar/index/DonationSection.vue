<template>
  <section id="donate">
    <b-row>
      <b-col>
        <h2 class="text-center mb-3">ساعدونا نحقق هدفنا</h2>
        <p class="lead text-center">
          هدفنا المالي لدفع تكاليف دواي و إستضافته عبر الإنترنت تتطلب
          <span class="font-weight-bold">6000$</span>
          دولار. تبرعكم و لو بجنيه سيساعدنا. يمكنك التبرع عبر الحساب أدناه:
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
            <h6 class="text-center">أسامة عادل الخير النور</h6>
            <h6 class="text-center">0193021136840001</h6>
            <h6 class="text-center">بنك الخرطوم</h6>
          </b-col>
        </b-row>
        <h4 class="text-center mb-3">حالنا الآن:</h4>
        <b-progress
          style="border-radius: 50rem; background-color: rgba(200,200,200,0.2);"
          :max="6000"
          height="3rem"
          animated
        >
          <b-progress-bar class="accent" :value="500">
            <strong class="mr-3">4 / 6000 دولار</strong>
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
          >أضغطو هنا لمعرفة ميزانيتنا</b-button
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
