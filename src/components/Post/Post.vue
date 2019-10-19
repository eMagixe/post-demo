<template>
    <v-container>
        <v-card
            class="mx-auto mb-3"
            max-width="100%"
        >
            <div class="pointer" @click="view = !view">
                <v-img
                    :src="postdata.image"
                    height="400px"
                ></v-img>
                <v-card-title>
                    <h4>{{ postdata.title }}</h4>
                </v-card-title>
                <v-card-text>
                    <p class="subtitle-1">{{ postdata.description }}</p>
                </v-card-text>
            </div>
            <v-divider v-if="view"></v-divider>
            <v-card-text v-if="view">
                <div v-html="postdata.content"></div>
            </v-card-text>
            <v-card-text v-if="view">
                <div>
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
                        class="mr-4 mb-5"
                        @click="addComment"
                        >
                        Добавить
                        </v-btn>
                        <v-divider></v-divider>
                    </v-form>
                    <v-list class="mt-5">
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
                            <v-icon color="red darken-2" @click="delComment(comment)" dark>mdi-minus</v-icon>
                        </v-btn>
                        </v-list-item>
                    </v-list-item-group>
                    </v-list>
                </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <editable :post='postdata'></editable>
                <div v-if="!view">
                    <v-icon large color="blue darken-2">mdi-message-text</v-icon>
                    {{ postdata.comments.length }}
                </div>
                <v-spacer></v-spacer>
                <v-btn @click="remove(postdata)" text>
                    <v-icon middle left color="red darken-2">mdi-delete</v-icon>
                    Удалить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script src="./Post.js"></script>