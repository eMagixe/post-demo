<template>
    <v-container>
        <div v-for="post in posts" :key="post.id">
            <post :postdata="post"></post>
        </div>
    </v-container>
</template>

<script>
import post from './Post'
import { mapGetters } from 'vuex'

export default {
    components: {
        post,
    },
    computed: {
        ...mapGetters({
            posts: 'getAll'
        })
    }
};
</script>
