<template>
  <v-container>
            <v-card
                class="mx-auto mb-3"
                max-width="100%"
            >
            <div @click="view = !view">
                <v-card-title>
                    <h4>{{ postdata.title }}</h4>
                </v-card-title>

                <v-card-text>
                    <p class="subtitle-1">{{ postdata.description }}</p>
                </v-card-text>
            </div>

            <v-card-text>
                <div v-if="view" v-html="postdata.content"></div>
            </v-card-text>
            <v-card-text>
                 <p v-if="!view" class="subtitle-1">
                    Комментариев: {{ postdata.comments.length }}
                </p>
                <div v-else>
                    <h3>Добавить комментарии</h3>
                    <v-form class="mt-5">
                        <v-text-field
                        label="Имя"
                        v-model="comment.name"
                        ></v-text-field>
                        <v-textarea
                        label="Текст сообщения"
                        v-model="comment.text"
                        ></v-textarea>
                        <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="addComment"
                        >
                        Добавить
                        </v-btn>
                    </v-form>
                    <v-list>
                    <h3>Комментарии</h3>
                    <v-list-item-group color="primary">
                        <v-list-item
                        v-for="(comment, i) in postdata.comments"
                        :key="i"
                        >
                        <v-list-item-content>
                            <v-list-item-title v-text="comment.name"></v-list-item-title>
                            <v-list-item-subtitle v-text="comment.text"></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-btn class="mx-2" small outlined fab>
                            <v-icon @click="delComment(comment)" dark>mdi-minus</v-icon>
                        </v-btn>
                        </v-list-item>
                    </v-list-item-group>
                    </v-list>
                </div>
            </v-card-text>

            <v-card-actions>
                <editable :post='postdata'></editable>
                <v-btn @click="remove(postdata)" text>Удалить</v-btn>
            </v-card-actions>
        </v-card>
  </v-container>
</template>

<script>
import editable from './Editable'
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
        ...mapMutations({
            remove: 'remove'
        }),
        addComment() {
            if(this.valid) this.postdata.comments.push({
                name: this.comment.name,
                text: this.comment.text
            })
        },
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
</script>
