<template>
  <section class="article-view is-paddingless">
    <div class="article">
      <figure class="blog__hero image is-16by9">
        <img
          :src="post.attributes.hero_image"
          :alt="post.attributes.title"
          class="hero-img"
        />
      </figure>
      <div
        class="blog__info has-text-left"
        :class="{ 'border-light': isLight }"
      >
        <h2 class="article-title">
          {{ post.attributes.title }}
        </h2>
        <p class="article-date" :class="{ 'has-text-white': !isLight }">
          {{ post.attributes.date | moment("MMMM Do, YYYY") }}
        </p>
      </div>
      <div
        class="blog__body has-text-left is-size-5-desktop"
        :class="{ 'has-text-white': !isLight }"
        v-html="post.html"
      ></div>
      <div class="blog__tags">
        <div class="tag" v-for="tag in post.attributes.tags" :key="tag.id">
          <a
            class="has-text-white is-size-6"
            :href="`/blog/writing?tag=${tag}`"
            >{{ tag }}</a
          >
        </div>
      </div>
      <!-- <div class="blog__comments" :class="{ bg: isLight }">
        <vue-disqus
          v-if="disqus_id"
          shortname="https-jamestucker-dev-1"
          :identifier="disqus_id"
          class="vue-disqus"
        ></vue-disqus>
      </div> -->
      <!-- <div class="blog__footer">
        <h2 :class="{ 'has-text-white': !isLight }">Written By: {{ post.attributes.author }}</h2>
      </div>-->
    </div>
  </section>
</template>
<script>
export default {
  props: {
    isLight: Boolean
  },
  data() {
    return {
      disqus_id: undefined
    };
  },
  created() {
    this.disqus_id = this.$route.path;
    console.log(this.post);
  },
  // get the slug as a param to import the correct md file
  async asyncData({ params }) {
    try {
      const currentPath = params.slug;
      // get current post data
      const post = await import(`~/content/blog_posts/${params.slug}.md`);

      // get all post data for next route
      const allPosts = await require.context(
        "~/content/blog_posts/",
        true,
        /\.md$/
      );
      return {
        post
      };
    } catch (err) {
      console.debug(err);
      return false;
    }
  }
};
</script>
<style scoped>
.article-view {
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 50vw;
}

.article {
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 0;
}

.article-title {
  color: #f27045;
}

.article-date {
  color: #113134;
}

.blog__hero {
  overflow: hidden;
  margin: 2em 0 0;
  width: 100%;
  position: relative;
}

.hero-img {
  object-fit: cover;
}

.blog__info {
  text-align: center;
  width: 100%;
  margin: 1rem 0rem;
  border-bottom: 1px dotted white;
}

.border-light {
  border-bottom: 1px dotted #113134;
}

.blog__body {
  width: 100%;
  margin: 1.75em 0em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-wrap: break-word;
  font-family: "Gotu", sans-serif;
  color: #113134;
}

.blog__tags {
  width: 100%;
  margin-top: 2em;
  display: flex;
  flex-direction: row;
}

.tag {
  background: #f27045;
  width: fit-content;
  padding: 1.25em;
  margin: 0.75em;
}

.blog__comments {
  width: 100%;
  margin: 2em 1em;
}

.bg {
  background: #113134;
}

.vue-disqus {
  padding: 0.75em;
}

@media (min-width: 768px) {
  .blog {
    display: flex;
    flex-direction: column;
  }
  .blog__body {
    width: 100%;
  }

  .blog__info {
    text-align: center;
    padding: 1rem 0;
  }
}

@media (min-width: 1440px) {
  .blog__info {
    padding: 1.5rem 0;
  }
}

@media (max-width: 768px) {
  .article {
    width: 100%;
    margin: 1.75em 0em 0em;
  }

  .article-view {
    width: 100%;
  }

  .blog__comments {
    padding: 0;
    margin: 2em 0em;
  }
}
</style>
