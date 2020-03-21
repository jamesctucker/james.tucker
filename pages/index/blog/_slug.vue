<template>
  <section class="article-view is-paddingless">
    <div class="article">
      <figure class="blog__hero">
        <img :src="post.attributes.hero_image" :alt="post.attributes.title" class="hero-img" />
      </figure>
      <div class="blog__info">
        <h1
          class="title article-title"
          :class="{ 'has-text-white': !isLight }"
        >{{ post.attributes.title }}</h1>
        <h3 :class="{ 'has-text-white': !isLight }">{{ formattedDate }}</h3>
      </div>
      <div
        class="blog__body is-size-5-desktop"
        :class="{ 'has-text-white': !isLight }"
        v-html="post.html"
      ></div>
      <div class="blog__tags">
        <div class="tag" v-for="tag in post.attributes.tags" :key="tag.id">
          <a class="has-text-white is-size-6" :href="`/blog/writing?tag=${tag}`">{{tag}}</a>
        </div>
      </div>
      <div class="blog__comments" :class="{ 'bg': isLight }">
        <vue-disqus
          v-if="disqus_id"
          shortname="https-jamestucker-dev-1"
          :identifier="disqus_id"
          class="vue-disqus"
        ></vue-disqus>
      </div>
      <!-- <div class="blog__footer">
        <h2 :class="{ 'has-text-white': !isLight }">Written By: {{ post.attributes.author }}</h2>
      </div>-->
    </div>
  </section>
</template>
<script>
import moment from "moment";
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
  computed: {
    formattedDate() {
      return moment(this.post.attributes.date).format("MMMM Do, YYYY");
    }
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
  },
  methods: {
    moment() {
      return moment();
    }
  }
};
</script>
<style scoped>
.article-view {
  display: flex;
  flex-direction: column;
  padding: 1em;
}

.article {
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 0;
  padding: 3em;
  width: 60vw;
}

.blog__hero {
  overflow: hidden;
  min-height: 300px;
  height: 40vh;
  margin: 0;
  width: 100%;
}

.hero-img {
  object-fit: cover;
  height: 100%;
}

.blog__info {
  text-align: center;
  padding: 1.5rem 1.25rem;
  width: 100%;
  margin: 0 auto;
}

.blog__body {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-wrap: break-word;
  font-family: "Work Sans", sans-serif;
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
  background: #2f3336;
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
  .blog__hero {
    min-height: 600px;
    height: 75vh;
  }
  .blog__info {
    text-align: center;
    padding: 2rem 0;
  }
}

@media (min-width: 1440px) {
  .blog__hero {
    height: 50vh;
  }
  .blog__info {
    padding: 3rem 0;
  }
}

@media (max-width: 768px) {
  .article {
    width: 100%;
    padding: 0.25em;
  }

  .blog__hero {
    height: 40vh;
  }

  .blog__comments {
    padding: 0;
    margin: 2em 0em;
  }
}
</style>