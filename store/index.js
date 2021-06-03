
console.log(process.env.BASE_URL);
export const siteURL = process.env.BASE_URL;



export const state = () => ({
    posts: [],
    throwbacks: [],
    menuItems: [],
    options: {},
    tags: [],
    apiBase: null
})


export const mutations = {
    updatePosts: (state, posts) => {
        state.posts = posts
    },
    updateThrowbacks: (state, throwbacks) => {
        state.throwbacks = throwbacks
    },

    updateOptions: (state, options) => {
        state.options = options
    },

    updateMenuItems: (state, menuItems) => {
        state.menuItems = menuItems
    },

    updateApiBase (state, value) {
        state.apiBase = value
    },

    updateTags: (state, tags) => {
        state.tags = tags
    }
}

export const actions = {
    async getPosts({state, commit, dispatch}) {
        if (state.posts.length) return

        try {
            let posts = await fetch(
                `${siteURL}/wp-json/wp/v2/pages?page=1&per_page=20&_embed`
            ).then(res => res.json())

            posts = posts
                .filter(el => el.status === "publish")
                .map(({id, slug, title, excerpt, date, tags, content, featured_img_url, callout}) => ({
                    id,
                    slug,
                    title,
                    excerpt,
                    date,
                    tags,
                    content,
                    featured_img_url,
                    callout
                }))
            commit("updatePosts", posts)
        } catch (err) {
            console.log(err)
        }
    },
    async getThrowbacks({state, commit, dispatch}) {
        if (state.throwbacks.length) return

        try {
            let throwbacks = await fetch(
                `${siteURL}/wp-json/wp/v2/throwback/`
            ).then(res => res.json())


            throwbacks = throwbacks
                .filter(el => el.status === "publish")
                .map(({id, slug, title, excerpt, date, tags, content, ACF}) => ({
                    id,
                    slug,
                    title,
                    excerpt,
                    date,
                    tags,
                    content,
                    ACF
                }))
            commit("updateThrowbacks", throwbacks)
        } catch (err) {
            console.log(err)
        }
    },


    async getMenuItems({state, commit, dispatch}) {
        if (state.menuItems.length) return

        try {
            let menuItems = await fetch(
                `${siteURL}/wp-json/wisnet96/menu`
            ).then(res => res.json())



            menuItems = menuItems
                .map(({ID, menu_order, title, url, classes}) => ({
                    ID,
                    menu_order,
                    title,
                    url,
                    classes
                }))
            commit("updateMenuItems", menuItems)
        } catch (err) {
            console.log(err)
        }
    },

    async getOptions({state, commit, dispatch}) {
        if (state.options.length) return

        try {
            let options = await fetch(
                `${siteURL}/wp-json/acf/options`
            ).then(res => res.json())

            options = JSON.parse(JSON.stringify(options));

            commit("updateOptions", options)
        } catch (err) {
            console.log(err)
        }
    },

    async getTags({state, commit}) {
        if (state.tags.length) return

        let allTags = state.posts.reduce((acc, item) => {
            return acc.concat(item.tags)
        }, [])
        allTags = allTags.join()

        try {
            let tags = await fetch(
                `${siteURL}/wp-json/wp/v2/tags?page=1&per_page=40&include=${allTags}`
            ).then(res => res.json())

            tags = tags.map(({id, name}) => ({
                id,
                name
            }))

            commit("updateTags", tags)
        } catch (err) {
            console.log(err)
        }
    }
}
