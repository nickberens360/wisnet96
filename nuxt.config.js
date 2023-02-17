import axios from "axios"
import {resolve} from 'path'


export default {
    target: 'static',
    env: {
        BASE_URL: process.env.NODE_ENV === 'production' ? 'https://apiwisnet96.wpengine.com' : 'http://api-wisnet96.dev'
    },
    alias: {
        'images': resolve(__dirname, './assets/images'),
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
            },
            {
                name: "twitter:card",
                content: "summary_large_image"
            },
            {
                property: "og:title",
                content: "Enjoy our Throwback"
            },
            {
                property: "og:image",
                content: "https://www.wisnet96.com/wisnet96-og-image.jpg"
            },
        ],
        script: [
            {src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js', body: true},
            {src: 'https://platform.twitter.com/widgets.js', body: true},
            {src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js', body: true},
            {src: '/js/pixel.js', body: true}
        ],
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap'
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
    buildModules: [
        ['nuxt-fontawesome', {
            component: 'fa', //customize component name
            imports: [
                {
                    set: '@fortawesome/free-solid-svg-icons',
                    icons: ['fas']
                },
                {
                    set: '@fortawesome/free-brands-svg-icons',
                    icons: ['faGithub']
                },
                {
                    set: '@fortawesome/free-regular-svg-icons',
                    icons: ['far']
                },
            ]
        }]
    ],
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