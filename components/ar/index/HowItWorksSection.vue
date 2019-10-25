<template>
  <section id="how-it-works">
    <b-row>
      <b-col>
        <h2 class="text-center mb-1">كيف يعمل دواي؟</h2>
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
          الصيدليات سوف تدير مخزونها و تجعل الدواء متاح للبحث
        </p>
        <b-row class="align-items-center justify-content-center">
          <b-button
            href="https://dawai-ph.herokuapp.com/dashboard"
            target="blank"
            class="btn-accent shadow"
            size="lg"
            pill
            >انظر بنفسك!</b-button
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
          المريض سيبحث على الدواء و يجد مكان توفره في الصيدلية حسب مخزونها
        </p>
        <b-row class="align-items-center justify-content-center">
          <b-button
            href="https://dawai-ph.herokuapp.com/"
            target="blank"
            class="btn-accent shadow"
            size="lg"
            pill
            >ابحث الآن!</b-button
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
          سيتمكن للمريض عرض مكان الصيدلية و إتجاهاتها للذهاب إليها مباشرة من
          الموقع
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
