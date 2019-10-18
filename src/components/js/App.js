import ListPost from '../ListPost';

export default {
    name: 'App',
    components: {
        ListPost,
    },
    methods: {
        /**
         * Создание и добавление пустой статьи в хранилище
         */
        create() {
            this.$store.commit('create')
        }
    }
}