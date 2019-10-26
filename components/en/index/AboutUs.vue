<template>
  <section id="about">
    <b-row class="align-items-center justify-content-center">
      <b-col cols="12" lg="12">
        <h2 class="text-center mb-3">Who Are We?</h2>
        <p class="lead text-center">
          We are a couple of guys who had trouble finding medicine for our
          family, just like many others. Finding medicine traditionally is a
          tedious, costly and time-consuming process. Even after all of your
          effort to sometimes find the simplest of medicine, you may end up
          searching from pharmacy to pharmacy, only to come back empty-handed.
          This experience brought us together, and ever since, we worked hard to
          make sure this problem never happens to anyone ever again.
        </p>
        <profile-cards />
        <br />
        <p class="lead text-center">
          We aspire to help grow our country technologically, and provide
          solutions that will make our lives easier and more comfortable, and
          together, we can make Sudan a great place like it once was. For we
          strongly believe, that our community, through collaboration and team
          work, can make anything happen.
        </p>
        <br />
        <p class="lead text-center">
          But… without you, we cannot make it happen.
        </p>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import ProfileCards from '@/components/en/index/ProfileCards'
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
