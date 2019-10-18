import listPosts from './listPosts'

export default {
    state: {
        posts: listPosts,
        isSave: false
    },
    getters: {
        /**
         * Получение статей в обратном порядке
         * state {object}
         */
        getAll: (state) => {
            return state.posts.reverse()
        },
        /**
         * Получение статуса
         * state {object}
         */
        getStatus: (state) => {
            return state.isSave
        }
    },
    mutations: {
        /**
        * Удаление статьи
        * state {object}, post {object}
         */
        remove (state, post) {
            let index = state.posts.indexOf(post);
            if (index !== -1) state.posts.splice(index, 1);
        },
        /**
         *Создание шаблона статьи
         * state {object}
         */
        create (state) {
            const post = {
                title: '',
                description: '',
                content: '',
                comments: []
            }
            state.posts.push(post)
        },
        /**
         * Устанока статуса сохранения
         * state {object}
         */
        saving (state) {
            state.isSave = true
        },
        /**
         * Установка статуса окончания сохранения
         * для визуализаци через 1 секунду
         * state {object}
         */
        saved (state) {
            setTimeout(() => {
                state.isSave = false
            },1000)
        }
    }
}