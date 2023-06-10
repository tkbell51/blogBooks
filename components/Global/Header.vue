<script setup lang="ts"></script>

<template>
  <header class="header">
    <nav class="nav">
      <nuxt-link to="/" class="nav__logo">Creatives Can Profit</nuxt-link>

      <ul class="nav__list">
        <li class="nav__item">
          <nuxt-link class="nav__link" to="/">Home</nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link class="nav__link" to="/blog">Categories</nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link class="nav__link" to="/about">About Us</nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link class="nav__link" to="/Resources">Resources</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
}
.nav {
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  &__logo {
    @apply flex justify-center items-center;
    font-size: var(--font-size-xxl);
    font-weight: 700;
  }
  &__list {
    @apply flex justify-between gap-4;
  }
}
</style>
