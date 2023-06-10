<script setup>
// import icon
import { TagIcon } from '@heroicons/vue/24/solid'

// tag list state
const expanded = ref(false)
const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
// helper function to flatten tags array
const flatten = (tags, key) => {
  let _tags = tags
    .map((tag) => {
      let _tag = tag
      if (tag[key]) {
        let flattened = flatten(tag[key])
        _tag = flattened
      }
      return _tag
    })
    .flat(1)
  return _tags
}

// function to toggle expanded state
const toggleExpand = () => {
  expanded.value = !expanded.value
}

// get only tags data from `/blog`
const { data } = await useAsyncData('tags', () =>
  queryContent('blog').only(['tags']).find()
)

// generate array without duplicates from flattened array
const articleTags = [...new Set(flatten(data.value, 'tags'))]
</script>
<template>
  <div class="tag-list" :class="{ active: expanded }">
    <!-- Button to toggle expand -->
    <button @click="toggleExpand" class="cta w-icon">
      <TagIcon class="icon solid" />
      <span>Tags</span>
    </button>
    <ul class="article-tags" :class="{ expanded: expanded }">
      <!-- list out tags with links -->
      <li v-for="(tag, n) in articleTags" :key="n" class="tag">
        <NuxtLink :to="`/categories/${slugify(tag)}`" class="font-semibold">
          {{ tag }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<style scoped>
/* ... */
</style>
