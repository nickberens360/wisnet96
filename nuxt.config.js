import axios from "axios"
import { resolve } from 'path'

/*let dynamicRoutes = () => {
    const routes = axios
        .get("https://apiwisnet96.wpengine.com/wp-json/wp/v2/pages?page=1&per_page=20")
        .then(res => {
            return res.data.map(post => `/${post.slug}`)
        })
    return routes
}*/

export default {
    target: 'static',
    env: {
        BASE_URL: process.env.NODE_ENV === 'production' ? 'https://apiwisnet96.wpengine.com' : 'http://api-wisnet96.dev'
    },
    alias: {
        'images': resolve(__dirname, './assets/images'),
    },

    /*router: {
        base: '/page/'
    },*/

    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            {charset: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1"},
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            },
            {
                name: "twitter:card",
                content: "summary"
            },
            {
                property: "og:title",
                content: "Enjoy our Throwback"
            },
            {
                property: "og:image",
                content: "http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg"
            },



        ],
        script: [
            { src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js', body: true },
            { src: 'https://platform.twitter.com/widgets.js', body: true },
            { src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js', body: true },
            { src: '/js/pixel.js', body: true }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {color: "#fff"},
    /*
     ** Global CSS
     */
    css: ["~/assets/scss/main.scss"],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        "~/plugins/data.server.js",
        "~/plugins/dateformat.js"
    ],
    generate: {
        // routes: dynamicRoutes,
        fallback: false,
        subFolders: false,
        cache: false
    },
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        cache: false,
        extend(config, ctx) {
        }
    },
}