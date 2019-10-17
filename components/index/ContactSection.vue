<template>
  <section id="contact">
    <b-container>
      <b-row class="mt-5 align-items-center justify-content-center">
        <h2>Contact Us</h2>
      </b-row>
      <b-row class="mb-3 align-items-center justify-content-center">
        <p>
          Our brain-washed support team is working hard to satisfy all your
          needs! Send them a message or say hello :)
        </p>
      </b-row>
      <b-row class="align-items-center justify-content-center">
        <b-col sm="6">
          <b-form data-netlify>
            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.name"
                required
                placeholder="Full name..."
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label-for="input-1"
              description="We'll never share your email with anyone else!"
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Email address..."
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label-for="input-3">
              <b-form-textarea
                id="textarea"
                v-model="form.text"
                placeholder="Tell us whats on your mind..."
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>

            <b-button class="btn-accent shadow" type="submit" pill block
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
