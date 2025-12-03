<template>
  <div class="app-root">
    <Navbar />

    <main class="container my-4">
      <router-view />
    </main>

    <Footer/>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>