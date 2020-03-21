<template>
  <div class="blog-sidebar">
    <div v-for="post in posts" :key="post.id">
      <p>{{post.attributes.date}}</p>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions, mapGetters } from "vuex";

export default {
  props: {
    posts: Array,
    isLight: Boolean
  },
  computed: {
    allPosts() {
      return this.$store.state.blog.allPosts;
    }
  },
  methods: {}
};
</script>

<style scoped>
</style>