<template>
  <v-app>
    <v-app-bar app class="primary" dark>
        <v-toolbar-title class="headline text-uppercase">
            <span>Post</span>
            <span class="font-weight-light">Demo for gibrit.io</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="create" class="mx-2" small outlined>
            <v-icon left dark>mdi-plus</v-icon>
            Добавить
        </v-btn>
    </v-app-bar>
    <v-content>
      <ListPost/>
    </v-content>
  </v-app>
</template>

<script>
import ListPost from './components/ListPost/ListPost.vue';

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
</script>

<style>
.pointer {
    cursor: pointer;
}
</style>
