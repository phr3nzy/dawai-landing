<template>
  <section id="contact" class="my-5 py-5">
    <b-container>
      <b-row class="align-items-center justify-content-center">
        <h2>Contact Us</h2>
      </b-row>
      <b-row class="mb-3 align-items-center justify-content-center">
        <p class="text-center">
          Our brain-washed support team is working hard to satisfy all your
          needs! Send them a message or say hello :)
        </p>
      </b-row>
      <b-row class="align-items-center justify-content-center">
        <b-col sm="6">
          <b-form action="https://formcarry.com/s/aJlz4Jj0Kcm" method="POST">
            <b-form-group id="input-group-1" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.name"
                name="name"
                tabindex="1"
                required
                placeholder="Full name..."
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label-for="input-2"
              description="We'll never share your email with anyone else!"
            >
              <b-form-input
                id="input-2"
                v-model="form.email"
                tabindex="2"
                name="email"
                type="email"
                required
                placeholder="Email address..."
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label-for="input-3">
              <b-form-textarea
                id="input-3"
                v-model="form.text"
                tabindex="3"
                name="message"
                placeholder="Tell us whats on your mind..."
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
              >Submit</b-button
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
