export default {
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'TSLA Exchange',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'USDC-to-sTSLA exchange' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/stsla.ico' },
    ],
  },
};
