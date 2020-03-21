<template>
  <div class="dropdown" :class="{ 'is-active': showDropDown }">
    <div class="dropdown-trigger">
      <button
        class="button dropdown-button"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
      >
        <font-awesome-icon
          icon="bars"
          style="margin-right: .5em"
          class="hamburger-icon"
          :class="{ 'light-text': isLight }"
          size="lg"
        />
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content is-flex" :class="{ 'light-bg': isLight }">
        <div class="dropdown-item">
          <nuxt-link
            to="/"
            class="mobile-link"
            :class="{ 'light-text': isLight }"
            >HOME</nuxt-link
          >
        </div>
        <div class="dropdown-item">
          <nuxt-link
            to="/About"
            class="mobile-link"
            :class="{ 'light-text': isLight }"
            >ABOUT</nuxt-link
          >
        </div>
        <div class="dropdown-item">
          <nuxt-link
            to="/Work"
            class="mobile-link"
            :class="{ 'light-text': isLight }"
            >PROJECTS</nuxt-link
          >
        </div>
        <div class="dropdown-item">
          <nuxt-link
            to="/blog/writing"
            class="mobile-link"
            :class="{ 'light-text': isLight }"
            >WRITING</nuxt-link
          >
        </div>
        <div class="dropdown-item">
          <nuxt-link
            to="/Speaking"
            class="mobile-link"
            :class="{ 'light-text': isLight }"
            >SPEAKING</nuxt-link
          >
        </div>
        <div class="dropdown-item">
          <a
            :href="`mailto: ${user.email}`"
            class="mobile-link"
            :class="{ 'light-text': isLight }"
            >CONTACT</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileMenu",
  props: {
    showDropDown: Boolean,
    isLight: Boolean
  },
  data() {
    return {
      user: {
        email: "jamesctucker@protonmail.com"
      }
    };
  }
};
</script>

<style>
.dropdown-menu {
  padding: 1em;
  width: 100vw;
  filter: drop-shadow(3px 1px 2px black);
}
.dropdown-content {
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 0.75em;
  background-color: #113134;
}

.dropdown-item {
  margin: 0.5em;
}

.mobile-link {
  color: white;
  font-size: 18px;
}

.button {
  background: transparent;
  border-color: transparent !important;
}

.button:hover {
  border-color: transparent !important;
}

.button:focus {
  border-color: #f27045;
}

.hamburger-icon {
  color: white;
}

.light-text {
  color: #2f3336;
}

.light-bg {
  background: white;
}
</style>
