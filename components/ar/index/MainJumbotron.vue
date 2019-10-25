<template
  ><section id="home">
    <div class="container mb-5">
      <div class="row align-items-center">
        <div class="col-lg-6 order-2 order-lg-1">
          <b-row class="float-right">
            <h1 class="mb-4 text-center">
              إيجاد الدواء لم يكن بهذه السهولة
            </h1>
            <p class="lead text-center">
              دواي يساعد المرضى على إيجاد مكان الدواء أونلاين بكل سهولة و بأسرع
              طريقة. ساعدونا لبدأ هذا المشروع بالتبرعات!
            </p>
          </b-row>
          <b-row class="align-items-center justify-content-center">
            <b-button
              to="#donate"
              class="text-uppercase btn-accent shadow mt-4 text-center"
              size="lg"
              pill
              >تبرعو الآن</b-button
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
