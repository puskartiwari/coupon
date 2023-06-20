// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  modules:['@nuxtjs/tailwindcss'],
  // devtools: { enabled: true }
  alias:{
    '@':resolve(__dirname,'/'),
  },
  css:["~/assets/main.scss"],
  postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
  },
})
