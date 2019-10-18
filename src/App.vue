<template>
  <v-app>
    <v-app-bar app>
        <v-toolbar-title class="headline text-uppercase">
            <span>Post</span>
            <span class="font-weight-light">Demo for gibrit.io</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="mx-2" small outlined fab>
            <v-icon @click="create" dark>mdi-plus</v-icon>
        </v-btn>
    </v-app-bar>

    <v-content>
      <ListPost/>
    </v-content>
  </v-app>
</template>

<script>
import ListPost from './components/ListPost';

export default {
    name: 'App',
    components: {
        ListPost,
    },
    methods: {
        create() {
            this.$store.commit('create')
        }
    }
}
</script>
