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
        base: '/96/'
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
            }
        ],
        script: [
            { src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js', body: true },
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
        /*"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js",
        "https://code.jquery.com/jquery-3.5.1.min.js",
        "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",*/
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