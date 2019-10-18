import editable from '../Editable'
import { mapMutations } from 'vuex'

export default {
    components: {
        editable
    },
    props: {
        postdata: Object
    },
    data () {
        return {
            view: false,
            comment: {
                name: '',
                text: ''
            }
        }
    },
    methods: {
        /**
         * Добавление мутатора удаления статьи
         */
        ...mapMutations({
            remove: 'remove'
        }),
        /**
         * Добавление комментария к статье
        */
        addComment() {
            if(this.valid) this.postdata.comments.push({
                name: this.comment.name,
                text: this.comment.text
            })
        },
        /**
         * Удаление комментария
         * comment {object}
         */
        delComment (comment) {
            let index = this.postdata.comments.indexOf(comment);
            if (index !== -1) this.postdata.comments.splice(index, 1);
        }
    },
    computed: {
        valid () {
            return this.comment.name &&  this.comment.text
        }
    }
}