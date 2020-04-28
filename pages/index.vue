<template>
  <div class="main-container" :class="{ 'light-background': isLight }">
    <!-- <Home :isLight="isLight" /> -->
    <div class="nav">
      <div @click="toggleDropDown">
        <MobileMenu
          class="mobile-menu is-hidden-tablet is-pulled-left"
          :showDropDown="isToggled"
          :isLight="isLight"
        />
      </div>

      <div class="display-togglers is-pulled-right is-paddingless">
        <button
          v-if="isLight"
          @click="toggleDark"
          class="dark-btn is-size-5 is-size-6-mobile"
        >
          <font-awesome-icon icon="moon" style="margin-right: .5em" />DARK MODE
        </button>
        <button
          v-if="!isLight"
          @click="toggleLight"
          class="light-btn is-size-5 is-size-6-mobile"
          :class="{ toggled: !isLight }"
        >
          <font-awesome-icon icon="sun" style="margin-right: .5em" />LIGHT MODE
        </button>
      </div>
      <div class="back-button">
        <a
          v-if="!isHome"
          @click="$router.go(-1)"
          class="home is-size-5 is-size-6-mobile"
          :class="{ 'home-toggled': isLight }"
          >back</a
        >
      </div>
    </div>
    <Home v-if="$route.name == 'index'" :isLight="isLight" />
    <Links
      v-if="isPost"
      :isLight="isLight"
      class="is-hidden-mobile"
      style="margin: 2em 0em 0em;"
    />
    <nuxt-child :isLight="isLight" class="main-children" />
    <Links v-if="!isPost" :isLight="isLight" class="is-hidden-mobile" />
    <Footer :isLight="isLight" />
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions, mapGetters } from "vuex";
import Footer from "./index/footer";
import Links from "./index/links";
import MobileMenu from "../components/MobileMenu";
import routes from "../.nuxt/router";
import Home from "./index/home";

export default {
  components: {
    Footer,
    Links,
    MobileMenu,
    Home
  },
  data() {
    return {
      isLight: false,
      isToggled: false
    };
  },
  mounted() {
    this.setBlogPosts(this.$data.allBlogPosts);
  },
  beforeDestroy() {
    this.resetPosts();
  },
  computed: {
    isHome: function() {
      return this.$route.name == "index";
    },
    isPost: function() {
      return this.$route.name == "index-blog-slug";
    }
  },
  async asyncData(context) {
    const allPosts = await require.context(
      "~/content/blog_posts/",
      true,
      /\.md$/
    );
    const allBlogPosts = allPosts.keys().map(key => {
      return allPosts(key);
    });
    return {
      allBlogPosts
    };
  },
  methods: {
    ...mapActions({
      setAllPosts: "blog/setAllPosts",
      resetPosts: "blog/resetAllPosts"
    }),
    toggleDark: function() {
      return (this.isLight = false);
    },
    toggleLight: function() {
      return (this.isLight = true);
    },
    setBlogPosts(posts) {
      return this.setAllPosts(posts);
    },
    toggleDropDown() {
      return (this.isToggled = !this.isToggled);
    }
  }
};
</script>

<style lang="scss">
@import url("../assets/fonts/gotu.css");
@import url("../assets/fonts/taviraj.css");

.main-container {
  min-height: 100vh;
  display: flex;
  flex: auto;
  flex-direction: column;
  justify-content: center;
  background: #113134;
  padding: 4em;
}

h3 {
  font-family: "Taviraj", serif;
  font-size: 2vmax;
}

h2 {
  font-family: "Taviraj", serif;
  font-size: 3vmax;
}

h1 {
  font-family: "Taviraj", serif;
  font-size: 4.5vmax;
}

p {
  font-family: "Gotu", sans-serif;
}

.light-background {
  background: white;
}

.home {
  font-family: "Gotu", sans-serif;

  color: white;
  background: transparent;
  border: none;
  text-decoration: underline;
}

.home-toggled {
  color: #113134;
}

.home:hover {
  color: #f27045;
  text-decoration: underline;
}

.dark-btn {
  background: transparent;
  border: none;
  font-family: "Gotu", sans-serif;
  color: #113134;
}

.light-btn {
  background: transparent;
  border: none;
  font-family: "Gotu", sans-serif;
}

.toggled {
  text-decoration: underline;
  color: white;
}
@media only screen and (max-width: 768px) {
  .main-children {
    margin: 3em 0em;
  }

  .back-button {
    margin-top: 4em;
  }

  .display-togglers {
    padding: 0em;
  }

  // .nav {
  //   padding: 1.75em;
  // }
}

/* Main view transitions; configured in nuxt.config.js */
.slide-fade-leave-active {
  transition: 0.2s ease-in;
}
.slide-fade-enter-active {
  transition: 0.3s ease-out;
}
.slide-fade-enter {
  transform: translate(50%, 0);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translate(-25%, 0);
  opacity: 0;
}

@media only screen and (max-width: 768px) {
  .main-container {
    padding: 1.75em;
  }
}
</style>
