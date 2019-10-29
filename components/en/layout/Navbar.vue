<template>
  <b-navbar type="light" variant="white">
    <b-navbar-brand to="/">
      <b-img
        class="mr-2"
        height="40px"
        src="icon-128x128.png"
        alt="Dawai Logo"
        aria-label="Dawai Logo Picture"
      ></b-img
      >Dawai</b-navbar-brand
    >
    <b-navbar-nav class="ml-auto">
      <nuxt-link to="/ar" class="accent--text my-1 mx-2">
        <h6 style="font-family: 'Tajawal';">العربية</h6>
      </nuxt-link>
    </b-navbar-nav>
  </b-navbar>
</template>
