<template>
  <div class="blog-view">
    <h3
      v-if="$route.query.tag"
      class="sorted-posts-header is-size-5-desktop is-size-6-mobile"
      :class="{ 'has-text-white': !isLight }"
    >
      All articles matching "{{ $route.query.tag }}"
    </h3>
    <div class="bloglist-container">
      <ul class="list">
        <div v-for="post in sortedPosts" :key="post.attributes.title">
          <li class="card list-item" :class="{ light: isLight }">
            <div class="columns">
              <div class="column is-3">
                <img
                  :src="post.attributes.hero_image"
                  :alt="post.attributes.title"
                  class="hero-image"
                />
              </div>
              <div class="column">
                <div class="blog-info">
                  <nuxt-link :to="`/blog/${post.attributes.slug}`">
                    <h2 class="blog-title is-size-4 title is-marginless">
                      {{ post.attributes.title }}
                    </h2>
                  </nuxt-link>
                  <div class="is-flex">
                    <i
                      class="blog-date"
                      :class="{ 'blog-date-light': isLight }"
                      >{{
                        moment(post.attributes.date).format("MMMM D, YYYY")
                      }}</i
                    >
                    <p>&nbsp;-&nbsp;</p>
                    <a
                      class="post-tag"
                      :href="`/blog/writing?tag=${post.attributes.tags[0]}`"
                    >
                      <i>{{ post.attributes.tags[0] }}</i>
                    </a>
                  </div>

                  <p class="blog-excerpt">{{ post.attributes.excerpt }}</p>
                </div>
              </div>
            </div>
          </li>
        </div>

        <button
          v-if="additionalPagesToDisplay"
          @click="showNextPage"
          class="button pagination-btn is-size-6 is-pulled-right"
          :class="{ 'light-text': !isLight }"
        >
          Older
          <font-awesome-icon icon="arrow-right" style="margin-right: .5em" />
        </button>
        <button
          v-if="olderPagesExist"
          @click="showPreviousPage"
          class="button pagination-btn is-size-6 is-pulled-left"
          :class="{ 'light-text': !isLight }"
        >
          <font-awesome-icon
            icon="arrow-left"
            style="margin-right: .5em"
          />Newer
        </button>
      </ul>
    </div>
  </div>
</template>
<script>
import moment from "moment";
const collect = require("collect.js");

export default {
  props: {
    posts: Array,
    isLight: Boolean
  },
  data() {
    return {
      pageNumber: 1,
      totalPages: undefined
    };
  },
  computed: {
    sortedPosts() {
      const collection = collect(this.posts);
      const numberOfPages = collection.chunk(1);
      this.totalPages = numberOfPages.all().length;
      const blogPosts = numberOfPages.all()[this.pageNumber - 1];

      if (blogPosts.length > 1) {
        blogPosts.sort((a, b) => {
          const dateA = new Date(a.attributes.date);
          const dateB = new Date(b.attributes.date);
          if (dateA < dateB) {
            return 1;
          }
          if (dateA > dateB) {
            return -1;
          }
          return 0;
        });
        return blogPosts;
      } else {
        return blogPosts;
      }
    },
    additionalPagesToDisplay() {
      return this.pageNumber < this.totalPages;
    },
    olderPagesExist() {
      return this.pageNumber <= this.totalPages && this.pageNumber !== 1;
    }
  },
  methods: {
    moment() {
      return moment();
    },
    showNextPage() {
      return (this.pageNumber = this.pageNumber + 1);
    },
    showPreviousPage() {
      return (this.pageNumber = this.pageNumber - 1);
    }
  }
};
</script>
<style scoped>
.blog-view {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
}

/* .bloglist-container {
  width: vw;
} */

.list {
  background: transparent;
  box-shadow: none;
}

.list-item {
  /* border: 0.25px solid black; */
  margin: 1.25em 0em;
  border-radius: 0px;
}

.card {
  background: darkgrey;
  padding: 0;
}

.light {
  background: white;
}

.list-item:hover {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-left: 8px solid gray;
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.hero-image {
  width: 50vw;
  height: 100%;
  object-fit: cover;
}

.blog-info {
  padding: 1em;
}

.blog-title {
  cursor: pointer;
}

.post-tag {
  text-decoration: underline;
  color: #4a4a4a;
}

.column {
  padding: 0rem 0.75rem !important;
}

.blog-date-light {
  color: gray;
}

.blog-excerpt {
  margin-top: 1em;
  word-wrap: break-word;
  text-overflow: ellipsis;
}

.sorted-posts-header {
  padding: 1em;
}

.pagination-btn {
  background: transparent;
  border: none;
  padding: 1em;
  font-family: "Gotu", sans-serif;
}

.pagination-btn:hover {
  color: #f27045;
}

.light-text {
  color: white;
}

@media only screen and (max-width: 768px) {
  .blog-view {
    padding: 1.5em;
    align-items: center;
    justify-content: center;
  }

  .list-item {
    width: 100%;
    margin: 3em 0em;
  }

  .hero-image {
    width: 100%;
  }

  .bloglist-container {
    width: 100%;
  }

  .pagination-btn {
    padding: 0;
  }
}
</style>
