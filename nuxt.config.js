import axios from "axios"

let dynamicRoutes = () => {
    const routes = axios
        .get("https://apiwisnet96.wpengine.com/wp-json/wp/v2/pages?page=1&per_page=20")
        .then(res => {
            return res.data.map(post => `/${post.slug}`)
        })
    return routes
}

export default {
    target: 'static',
    env: {
        BASE_URL: process.env.NODE_ENV === 'production' ? 'https://apiwisnet96.wpengine.com' : 'http://api-wisnet96.dev'
    },
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
        link: [
            {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Alata|Open+Sans&display=swap"
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {color: "#fff"},
    /*
     ** Global CSS
     */
    css: ["~/assets/src/main.scss"],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        "~/plugins/data.server.js",
        "~/plugins/dateformat.js"
    ],
    generate: {
        routes: dynamicRoutes,
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