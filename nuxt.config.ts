// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  head: {
    title: 'Creatives Can Profit',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Do you want to make a living from your enthusiasm for content creation? If you have a blog, a YouTube channel, a podcast, or any other form of creative content that you want to monetize, then you should check out CreativesCanProfit.com. To help you get more readers and make more money, our experienced authors will share what they know about affiliate marketing, sponsorships, advertising, and digital products, among other ways to make money. See us today if you're ready to elevate your writing to the next level."
      }
    ],
    script: [
      {
        src: 'https://transactions.sendowl.com/assets/sendowl.js',
        defer: true
      }
    ]
  }
})
