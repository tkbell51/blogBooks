<script setup>
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the current route
  let article = queryContent().where({ _path: path }).findOne()

  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent()
    .only(['_path', 'title', 'description'])
    .sort({ date: 1 })
    .findSurround(path)
  return {
    article: await article,
    surround: await surround
  }
})

// destrucure `prev` and `next` value from data
const [prev, next] = data.value.surround

// set the meta
useHead({
  title: data.value.article.title,
  meta: [
    { name: 'description', content: data.value.article.description },
    {
      hid: 'og:image',
      property: 'og:image',
      content: `https://site.com/${data.value.article.img}`
    }
  ]
})
</script>

<template>
  <main class="article-main">
    <div class="container">
      <div class="grid">
        <div class="grid__header">
          <div
            class="grid__img h-96 w-full bg-slate-300 rounded-md shadow-md shadow-slate-300"
          >
            <img :src="data.article.img" :alt="data.article.title" />
          </div>
        </div>

        <article class="grid__article">
          <h1>{{ data.article.title }}</h1>
          <ContentRenderer :value="data.article" />
        </article>
        <aside class="grid__aside">
          <div class="sticky-aside">
            <Toc :links="data.article.body.toc.links" />
            <EbookCTA :link="data.article.ebookLink" />
          </div>
        </aside>
      </div>
      <PrevNext :prev="prev" :next="next" />
    </div>
  </main>
</template>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header header'
    'post aside';
  gap: 4rem;
  width: 80%;
  margin-inline: auto;
  position: relative;
  &__header {
    grid-area: header;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  &__article {
    grid-area: post;
  }
  &__aside {
    grid-area: aside;
    position: sticky;
    top: 0;
    align-self: start;
  }

  &__main {
    @apply px-4;
  }
}
h2:first-of-type {
  margin-top: 0;
}
</style>
