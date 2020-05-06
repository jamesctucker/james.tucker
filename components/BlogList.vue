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
          <li class="list-item is-paddingless" :class="{ light: isLight }">
            <div class="blog-info">
              <nuxt-link :to="`/blog/${post.attributes.slug}`">
                <h2 class="blog-title title is-marginless">
                  {{ post.attributes.title }}
                </h2>
              </nuxt-link>
              <div class="is-flex">
                <i class="blog-date" :class="{ light: isLight }">{{
                  post.attributes.date | moment("MMMM D, YYYY")
                }}</i>
                <p>&nbsp;-&nbsp;</p>
                <a
                  class="post-tag"
                  :class="{ light: isLight }"
                  :href="`/blog/writing?tag=${post.attributes.tags[0]}`"
                >
                  <i>{{ post.attributes.tags[0] }}</i>
                </a>
              </div>
              <p class="blog-excerpt" :class="{ light: isLight }">
                {{ post.attributes.excerpt }}
              </p>
            </div>
          </li>
        </div>

        <button
          v-if="additionalPagesToDisplay"
          @click="showNextPage"
          class="button pagination-btn is-size-6 is-pulled-right"
          :class="{ 'light-text': isLight }"
        >
          Older
          <font-awesome-icon icon="arrow-right" style="margin-right: .5em" />
        </button>
        <button
          v-if="olderPagesExist"
          @click="showPreviousPage"
          class="button pagination-btn is-size-6 is-pulled-left"
          :class="{ 'light-text': isLight }"
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
      const numberOfPages = collection.chunk(2);
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

.hero-image {
  width: 50vw;
  height: 100%;
  object-fit: cover;
}

/* .blog-info {
  padding: 1em;
} */

.blog-excerpt {
  color: white;
}

.blog-title {
  cursor: pointer;
  color: #f27045;
}

.blog-date {
  color: white;
}

.post-tag {
  text-decoration: underline;
  color: white;
}

.column {
  padding: 0rem 0.75rem !important;
}

.light {
  color: #113134;
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
  color: white !important;
}

.pagination-btn:hover {
  color: #f27045;
}

.light-text {
  color: #113134 !important;
}

@media only screen and (max-width: 768px) {
  /* .blog-view {
    align-items: center;
    justify-content: center;
  } */

  .list-item {
    width: 100%;
    margin: 3em 0em;
  }

  .bloglist-container {
    width: 100%;
  }

  .pagination-btn {
    padding: 0;
  }
}
</style>
