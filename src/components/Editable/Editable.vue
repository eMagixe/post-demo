<template>
    <v-row>
        <v-dialog v-model="post.open">
            <template v-slot:activator="{ on }" >
                <v-btn class="ml-3" text v-on="on">
                    <v-icon middle left color="blue darken-2">mdi-pencil</v-icon>
                    Редактировать
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                <span class="headline">Редактирование</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="12" md="12">
                                <v-text-field label="Заголовок" v-model="post.title" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                                <v-text-field label="Фото" v-model="post.image" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                                <v-text-field label="Краткое описание" v-model="post.description"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                                <v-textarea
                                label="Полный текст статьи"
                                auto-grow
                                filled
                                rows="7"
                                v-model="post.content"
                                required
                                ></v-textarea>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="post.open  = !post.open">Отмена</v-btn>
                    <v-btn color="blue darken-1" text @click="setStatus">Сохранить</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script src="./Editable.js"></script>