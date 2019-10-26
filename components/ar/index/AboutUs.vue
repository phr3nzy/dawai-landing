<template>
  <section id="about">
    <b-row class="align-items-center justify-content-center">
      <b-col cols="12" lg="12">
        <h2 class="text-center mb-3">من نحن؟</h2>
        <p class="lead text-center">
          نحن مجرد شباب واجهتنا صعوبة في إيجاد الدواء, كما واجهت كثير من الناس.
          إيجاد الدواء حاليا مرهق, و مكلف, و قد يأخذ الكثير من الزمن. فبعد كل
          تعبك أحيانا في إيجاد أبسط الدواء عبر ذهابك من صيدلية إلى صيدلية, قد لا
          تجده. هذه المعاناة جمعتنا لإيجاد حل فوري يأكد عدم تكرار هذه التجربة
          لأي شخص آخر مجددا.
        </p>
        <profile-cards />
        <br />
        <p class="lead text-center">
          رؤيتنا أن نطور بلدنا عبر توفير حلول تكنولوجية لجعل حياتنا أسهل و أريح.
          فمعا, بإمكاننا جعل سوداننا في قمة الأمم كما كانت. فنحن نؤمن بأن
          مجتمعنا سويا عبر التعاون و العمل الجماعي, باستطاعته تحقيق أي شيء.
        </p>
        <br />
        <p class="lead text-center">
          ولكن... لن نقدر أن نفعل كل هذا بدونكم.
        </p>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import ProfileCards from '@/components/ar/index/ProfileCards'
export default {
  components: {
    ProfileCards
  }
}
</script>

<style scoped>
#about {
  margin-bottom: 20vh;
}
</style>
