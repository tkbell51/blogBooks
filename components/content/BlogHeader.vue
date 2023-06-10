<script setup lang='ts'>
</script>

<template>
  <h1 class="text-red">
    <ContentSlot
      :use="$slots.default"
      unwrap="p"
    />
  </h1>
</template>

<style lang="scss" scoped>
</style>