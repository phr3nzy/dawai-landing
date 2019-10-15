<template>
  <div>
    <b-navbar class="white" fixed="true" toggleable="lg" variant="info">
      <b-navbar-brand to="/">
        <b-img
          class="mr-2"
          height="40px"
          src="icon.png"
          alt="Dawai Logo"
          aria-label="Dawai Logo Picture"
        ></b-img
        >Dawai</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item active-class="primary--text" to="/#about"
            >About</b-nav-item
          >
          <b-nav-item active-class="primary--text" to="/#pricing"
            >Pricing</b-nav-item
          >
          <b-nav-item active-class="primary--text" to="/#contact"
            >Contact Us</b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button class="secondary my-1 mx-2"
            >We accept Donations <font-awesome-icon :icon="['fas', 'donate']"
          /></b-button>
          <b-button class="github-black my-1 mx-2"
            >GitHub Repository <font-awesome-icon :icon="['fab', 'github']"
          /></b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
