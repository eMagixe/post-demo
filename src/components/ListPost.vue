<template>
    <v-container>
            <v-alert type="success" v-if="status">
            <v-progress-circular
            indeterminate
            color="while"
            class="mr-5"
            ></v-progress-circular>Сохранение</v-alert>
        <div v-for="post in posts" :key="post.id">
            <post :postdata="post"></post>
        </div>
    </v-container>
</template>

<script>
import ListPost from './js/ListPost'
export default ListPost
</script>
