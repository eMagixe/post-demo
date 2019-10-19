import { mapMutations } from 'vuex'

export default {
    props: {
        post: Object
    },
    methods: {
        /**
         * Добавление методов мутаторов в компонент
         */
        ...mapMutations({
            saving: 'saving',
            saved: 'saved',
        }),
        /**
         * Установка статуса сохранения, закрытие окна диалога
         * разделена на жизненные циклы по статусам
         */
        setStatus () {
            this.post.open = false
            this.dialog = false
            this.saving()
            this.saved()
        },
    }
}