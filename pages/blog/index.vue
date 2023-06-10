<script setup lang="ts"></script>

<template>
  <main>
    <ContentList
      path="/blog"
      :query="{
        only: ['title', 'description', 'tags', '_path', 'img']
      }"
    >
      <template v-slot="{ list }">
        <ul class="article-list">
          <li v-for="article in list" :key="article._path" class="article">
            <NuxtLink :to="article._path">
              <div class="wrapper">
                <div class="img-cont w-32">
                  <img
                    :src="`/${article.img}`"
                    :alt="article.title"
                    class="rounded-lg max-h-[8rem]"
                  />
                </div>
                <header>
                  <h1 class="text-2xl font-semibold">{{ article.title }}</h1>
                  <p>{{ article.description }}</p>
                  <ul class="article-tags">
                    <li
                      class="tag !py-0.5"
                      v-for="(tag, n) in article.tags"
                      :key="n"
                    >
                      {{ tag }}
                    </li>
                  </ul>
                </header>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </template>
    </ContentList>
  </main>
</template>

<style lang="scss" scoped></style>
