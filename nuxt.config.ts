// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss","@pinia/nuxt"],
  css: ["~/assets/css/tailwind.css", "vue-toast-notification/dist/theme-default.css"],
});
