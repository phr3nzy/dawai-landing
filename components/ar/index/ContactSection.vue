<template>
  <section id="contact">
    <b-container>
      <b-row class="align-items-center justify-content-center">
        <h2 class="mb-3">تواصلو معنا</h2>
      </b-row>
      <p class="text-center lead">
        هل لديكم أي سؤال؟ يمكنكم التواصل معنا عبر الأرقام التالية
      </p>
      <p class="text-center lead">
        <a class="accent--text" href="tel:+249127604560">0127604560</a> -
        <a class="accent--text" href="tel:+249121812240">0121812240</a>
      </p>
      <p class="text-center lead">
        أو عبر الإيميل
      </p>
      <b-row class="mt-3 align-items-center justify-content-center">
        <b-col sm="6">
          <b-form action="https://formcarry.com/s/aJlz4Jj0Kcm" method="POST">
            <b-form-group id="input-group-1" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.name"
                name="name"
                tabindex="1"
                required
                placeholder="الاسم بالكامل..."
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label-for="input-2"
              description="لن نشارك بريدكم الإلكتروني مع أي شخص آخر!"
            >
              <b-form-input
                id="input-2"
                v-model="form.email"
                tabindex="2"
                name="email"
                type="email"
                required
                placeholder="عنوان البريد الكتروني..."
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label-for="input-3">
              <b-form-textarea
                id="input-3"
                v-model="form.text"
                tabindex="3"
                name="message"
                placeholder="أخبرونا بما يدور في ذهنكم..."
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>

            <b-button
              class="btn-accent shadow"
              type="submit"
              tabindex="4"
              pill
              block
              >إرسال</b-button
            >
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        text: ''
      }
    }
  }
}
</script>

<style scoped>
#contact {
  margin-bottom: 20vh;
}
</style>

<style>
#input-1,
#input-2,
#input-3 {
  border: none !important;
  background-color: hsl(0, 0%, 93%);
  border-radius: 15px;
}
#input-1:focus,
#input-2:focus,
#input-3:focus {
  box-shadow: 2px 4px 6px hsl(0, 0%, 85%);
  outline: none;
}
</style>
