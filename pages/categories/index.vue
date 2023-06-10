<script setup>
const { data } = await useAsyncData('tags', () =>
  queryContent('blog').only(['tags']).find()
)
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

const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')

// generate array without duplicates from flattened array
const articleTags = [...new Set(flatten(data.value, 'tags'))]
articleTags.forEach((tag) => {
  slugify(tag)
})
</script>

<template>
  <main>
    <div v-for="tag in articleTags" :key="tag">
      {{ slugify(tag) }}
    </div>

    <Tags />
  </main>
</template>

<style lang="scss" scoped></style>
