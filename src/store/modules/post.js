import listPosts from './listPosts'

export default {
    state: {
        posts: listPosts,
        isSave: false
    },
    getters: {
        /**
         * Получение статей в обратном порядке
         */
        getAll: (state) => {
            return state.posts.reverse()
        },
        /**
         * Получение статуса
         */
        getStatus: (state) => {
            return state.isSave
        },
        /**
         * Получение статуса модального окна
         */
    },
    mutations: {
        /**
        * Удаление статьи
            post {object}
         */
        remove (state, post) {
            let index = state.posts.indexOf(post);
            if (index !== -1) state.posts.splice(index, 1);
        },
        /**
         *Создание шаблона статьи
         */
        create (state) {
            const post = {
                title: '',
                description: '',
                content: '',
                open: true,
                comments: []
            }
            state.posts.push(post)
        },
        /**
         * Устанока статуса сохранения
         */
        saving (state) {
            state.isSave = true
        },
        /**
         * Установка статуса окончания сохранения
         * для визуализаци через 1 секунду
         */
        saved (state) {
            setTimeout(() => {
                state.isSave = false
            },1000)
        }
    }
}