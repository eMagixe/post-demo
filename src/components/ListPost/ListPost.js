import post from '../Post/Post.vue'
import { mapGetters } from 'vuex'

export default {
    components: {
        post,
    },
    computed: {
        /**
         * Добавление гетторов в компонент
         */
        ...mapGetters({
            posts: 'getAll',
            status: 'getStatus'
        })
    }
};