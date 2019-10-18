import { mapMutations } from 'vuex'

export default {
    props: {
        post: Object
    },
    data: () => ({
      dialog: false,
    }),
    methods: {
        /**
         * Добавление методов мутаторов в компонент
         */
        ...mapMutations({
            saving: 'saving',
            saved: 'saved'
        }),
        /**
         * Установка статуса сохранения, закрытие окна диалога
         */
        setStatus () {
            this.dialog = false
            this.saving()
            this.saved()
        }
    }
  }