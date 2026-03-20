<script setup lang="ts">
</script>

<template>
  <nav>
    JAX!
    <div class="page-links">
      <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/portfolio">Projects</RouterLink>  
    <RouterLink to="/resume">Resume</RouterLink>
    </div>
  </nav>
  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 1rem 2rem;
  font-weight: 800;
  background: linear-gradient(rgba(255, 255, 255, 0.159), transparent);
  z-index: 1001;
}
nav .page-links {
  display: flex;
  gap: 2rem;
}
nav .page-links a {
  text-decoration: none;
  color: inherit;
}
</style>
