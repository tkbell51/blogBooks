<template>
  <div class="page">
    <GlobalHeader class="header" />
    <NuxtPage class="main" />
    <GlobalFooter class="footer" />
  </div>
</template>
<style lang="scss">
:root {
  --font-size-sm: clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem);
  --font-size-base: clamp(1rem, 0.34vw + 0.91rem, 1.19rem);
  --font-size-md: clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem);
  --font-size-lg: clamp(1.56rem, 1vw + 1.31rem, 2.11rem);
  --font-size-xl: clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem);
  --font-size-xxl: clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem);
  --font-size-xxxl: clamp(3.05rem, 3.54vw + 2.17rem, 5rem);
}
html {
  scroll-behavior: smooth;
}
p {
  margin-bottom: 1rem;
  font-size: 1rem;
  font-size: var(--font-size-base);
}
h1 {
  font-size: var(--font-size-xxl);
}
h2 {
  @apply mb-2 mt-10;
  font-size: var(--font-size-xl);
}
h3 {
  @apply mb-2 mt-10;
  font-size: var(--font-size-lg);
}
.container {
  margin-inline: auto;
}
.page {
  @apply flex flex-col;
  min-height: 100vh;
  .main {
    margin-bottom: 2rem;
  }
  .footer {
    margin-top: auto;
    height: 10rem;
    background: black;
    color: white;
  }
}
</style>
