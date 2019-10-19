import { mapMutations } from 'vuex'

export default {
    props: {
        post: Object,
        dialog: Boolean
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
            this.dialog = false
            this.saving()
            this.saved()
        },
    }
}