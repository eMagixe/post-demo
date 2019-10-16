export default {
    state: {
        posts: [
            {
                title: '',
                description: '',
                content: '',
                commetns: [
                    {
                        name: '',
                        text: ''
                    }
                ]
            }
        ],
    },
    getters: {
        getAll: (state) => {
            return state.posts
        },
    },
    mutations: {
        searchPosts (state, query) {
            state.posts = state.posts.filter((post) => {
                return post.title.indexOf(query) !== -1 || false
            })
        }
    },
    actions: {
        show ({state}, id) {
            state.current = state.posts.filter((post) => {
                return post.id == id || false
            })
        },
        create (state, post) {
            state.posts.push(post)
        },
        /*
        update (state, post) {

        },
        destroy ({state, dispatch}, id) {

        },*/
        search (commit, query) {
                 commit('searchPosts', query)
        }
    }
}