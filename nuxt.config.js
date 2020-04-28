import path from "path";
const glob = require("glob");
const config = require("./content/data/config.json");
/* eslin-enable */
const dynamicRoutes = getDynamicPaths({
  "blog/writing": "content/blog_posts/*.md"
});

export default {
  mode: "spa",
  server: {
    // port: 8800, // default: 3000
    // host: "0.0.0.0" // default: localhost
    host: ""
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "James Tucker",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["./assets/fonts/gotu.css", "./assets/fonts/taviraj.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/fontawesome.js", "~/plugins/disqus"],
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    { src: "~/assets/styles/variables.scss", lang: "scss" }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // '@nuxtjs/router'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa"
    // '@nuxtjs/style-resources'
  ],
  // styleResources: {
  //   scss: [
  //       './assets/styles/_variables.scss'
  //   ]
  // },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        include: path.resolve(__dirname, "content/blog_posts"),
        options: {
          markdownIt: {
            html: true,
            linkify: true,
            breaks: true
          }
        }
      });
    }
  },
  generate: {
    routes: dynamicRoutes
  }
  // or
  // pageTransition: {
  //   name: "slide-fade",
  //   mode: "in-out",
  //   duration: 500
  // }
};

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */

/* referenced https://github.com/jake-101/bael-template */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      const filepathGlob = urlFilepathTable[url];
      const routes = glob
        .sync(filepathGlob)
        .map(filepath => `${url}/${path.basename(filepath, ".md")}`);
      return routes;
    })
  );
}
