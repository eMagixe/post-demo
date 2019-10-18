<template>
  <v-row>
    <v-dialog v-model="dialog">
      <template v-slot:activator="{ on }" >
        <v-btn class="ml-3" text v-on="on">Редактировать</v-btn>
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
                <v-text-field label="Краткое описание" v-model="post.description"></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-textarea
                  label="Полный текст статьи"
                  auto-grow
                  filled
                  rows="12"
                  v-model="post.content"
                  required
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Закрыть</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    props: {
        post: Object
    },
    data: () => ({
      dialog: false,
    })
  }
</script>