// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: ["~/assets/css/main.css", "~/assets/fonts/stylesheet.css"],
  build: {
    transpile: ['gsap']
  },
  app: {
    head: {
      title: `World's Leading Wet and Dry Auto flush Central Vacuum Cleaner | INVAC - Your Cleaning Partner`,
      meta: [
        {
          name: 'description',
          content: `Upgrade to a reliable home central vacuum system from INVAC. Discover our selection of affordable vacuum cleaners and experience the convenience of an automatic central vacuum system.`
        },
         {
          name: 'google-site-verification',
          content: `1VPbZsDivG10017vszTqb3-93Tu-oy-Gb6-X6mleFHs`
        },
      ],
      script: [
        {
          innerHTML: `
            <!-- Google Tag Manager -->
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-55VHW8G');
            <!-- End Google Tag Manager -->
          `,
          type: "text/javascript",
          // Use type assertion here
          // @ts-ignore
          attributes: {
            charset: "utf-8",
          },
        },
        {
          innerHTML: `
            <!-- Microsoft Clarity -->
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "jn86lwn612");
            <!-- End Microsoft Clarity -->
          `,
          type: "text/javascript",
        },
      ],
    }
  },

  modules: [
    "@vueuse/nuxt",
    "@nuxt/image-edge",
    "@nuxtjs/robots",
    'nuxt-simple-sitemap',
    '~/modules/sitemap'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  site: {
    url: 'https://www.in-vac.com',
  },
  sitemap: {
    hostname: 'https://www.invac.in',
  },
  devtools: true,
});
