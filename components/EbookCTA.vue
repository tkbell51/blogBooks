<script setup lang='ts'>
export interface Props {
  link: string;
  image: string;
}
const props = withDefaults(defineProps<Props>(), {
  image: "https://transactions.sendowl.com/assets/external/v2/buy-now.png",
});
</script>

<template>
  <a
    :href="link"
    rel="nofollow"
    target="_blank"
  ><img :src=image /></a>
</template>

<style lang="scss" scoped>
</style>