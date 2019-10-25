<template>
  <section id="extra-info">
    <h2 class="text-center mb-3">التعاون هو الحلَ!</h2>
    <p class="lead text-center">
      برنامجنا مفتوح المصدر, يعني الكود متاح للجميع لرؤيته والاستخدام. نريد أن
      نوفر أفضل برنامج بأعلى معايير ممكنة, لذلك نشجع مبرمجين السودان للتعاون
      معنا لإيجاد حلول مناسبة لجعل إيجاد الدواء أسهل.
    </p>
    <p class="lead text-center">
      زوروا مشروعنا في
      <a
        class="lead"
        href="https://www.github.com/phr3nzy/dawai"
        target="blank"
      >
        <font-awesome-icon style="color: #211F1F;" :icon="['fab', 'github']" />
        GitHub</a
      >
      لرؤية الكود
    </p>
    <!-- <div class="text-center">
      <b-button
        class="mt-3 mb-5 github-black shadow"
        href="https://www.github.com/phr3nzy/dawai"
        target="blank"
        size="lg"
        pill
        >GitHub Repository </b-button>
    </div> -->
    <h2 class="text-center mt-5 mb-3 pt-5">هل تشارك رؤيتنا؟</h2>
    <p class="lead text-center">
      إذا كنت تؤمن حقا بأن دواي سيساهم في تطوير السودان و جعل حياة السودانيين
      أسهل, فضلا, تبرعك سيساهم في ذلك
    </p>
    <div class="text-center mb-5">
      <b-button class="mt-3 btn-accent shadow" to="/#donate" size="lg" pill
        >تبرعو الآن</b-button
      >
    </div>
    <p class="lead text-center my-5 pt-5">
      سوف يكون أيضا من جزيل شكرنا نشر صفحتنا لكل من تعرفه عبر صفحات التواصل
      الاجتماعي التالية
    </p>
    <div class="text-center my-5">
      <a
        class="mx-2"
        href="https://www.facebook.com/x249sudan"
        target="blank"
        style="color: #3b5998;"
        ><font-awesome-icon style="font-size: 48px;" :icon="['fab', 'facebook']"
      /></a>
      <a
        class="mx-2"
        href="https://www.twitter.com/x249sudan"
        target="blank"
        style="color: #1da1f2;"
        ><font-awesome-icon style="font-size: 48px;" :icon="['fab', 'twitter']"
      /></a>
      <a
        class="mx-2"
        href="https://www.linkedin.com/company/x249/"
        target="blank"
        style="color: #0077B5;"
        ><font-awesome-icon style="font-size: 48px;" :icon="['fab', 'linkedin']"
      /></a>
    </div>
  </section>
</template>

<style scoped>
#extra-info {
  margin-bottom: 20vh;
}
</style>
