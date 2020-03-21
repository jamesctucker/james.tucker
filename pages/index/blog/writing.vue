<template>
  <div class="writing-view">
    <BlogList :posts="posts" :isLight="isLight" />
    <!-- <BlogSideBar :posts="posts" class="is-hidden-mobile" /> -->
  </div>
</template>

<script>
import BlogList from "../../../components/BlogList";
import BlogSideBar from "../../../components/BlogSideBar";

export default {
  name: "Writing",
  props: {
    isLight: Boolean
  },
  components: {
    BlogList,
    BlogSideBar
  },
  async asyncData(context) {
    // create context via webpack to map over all blog posts

    const allPosts = await require.context(
      "~/content/blog_posts/",
      true,
      /\.md$/
    );

    // if there is a query labeled 'tag', then sort posts by tag
    if (context.query.tag) {
      const allBlogPosts = allPosts.keys().map(key => {
        return allPosts(key);
      });

      const posts = allBlogPosts.filter(p =>
        p.attributes.tags.find(tag => tag == context.query.tag)
      );
      return {
        posts
      };
    } else {
      const posts = allPosts.keys().map(key => {
        return allPosts(key);
      });
      return {
        posts
      };
    }
  }
};
</script>
<style scoped>
.writing-view {
  margin: 3em 0em;
}
</style>
