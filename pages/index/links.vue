<template>
  <div class="links has-text-left-desktop is-flex">
    <div class="shake">
      <nuxt-link
        to="/"
        class="link-text"
        :class="{ 'light-link-text': !isLight }"
        >Home</nuxt-link
      >
    </div>
    <div class="shake">
      <nuxt-link
        to="/About"
        class="link-text"
        :class="{ 'light-link-text': !isLight }"
        >About</nuxt-link
      >
    </div>
    <div class="shake">
      <nuxt-link
        to="/Work"
        class="link-text"
        :class="{ 'light-link-text': !isLight }"
        >Projects</nuxt-link
      >
    </div>
    <div class="shake">
      <nuxt-link
        to="/blog/writing"
        class="link-text"
        :class="{ 'light-link-text': !isLight }"
        >Writing</nuxt-link
      >
    </div>
    <div class="shake">
      <nuxt-link
        to="/Speaking"
        class="link-text"
        :class="{ 'light-link-text': !isLight }"
        >Speaking</nuxt-link
      >
    </div>
    <div class="shake">
      <a
        :href="`mailto: ${user.email}`"
        class="link-text"
        :class="{ 'light-link-text': !isLight }"
        >Contact</a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "Links",
  props: { isLight: Boolean },
  data() {
    return {
      user: {
        email: "jamesctucker@protonmail.com"
      }
    };
  }
};
</script>
<style scoped>
.link-text {
  color: #113134;
  font-family: "Taviraj", serif;
  margin-right: 1em;
  font-size: 2.5vmax;
}

.light-link-text {
  color: white;
  font-family: "Taviraj", serif;
  margin-right: 1em;
}

.link-text:hover {
  color: #f27045;
  text-decoration: underline;
}

.shake:hover {
  animation: shake 150ms 2 linear;
  -moz-animation: shake 150ms 2 linear;
  -webkit-animation: shake 150ms 2 linear;
  -o-animation: shake 150ms 2 linear;
}

@keyframes shake {
  0% {
    transform: translate(3px, 0);
  }
  50% {
    transform: translate(-3px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

@-moz-keyframes shake {
  0% {
    -moz-transform: translate(3px, 0);
  }
  50% {
    -moz-transform: translate(-3px, 0);
  }
  100% {
    -moz-transform: translate(0, 0);
  }
}

@-webkit-keyframes shake {
  0% {
    -webkit-transform: translate(3px, 0);
  }
  50% {
    -webkit-transform: translate(-3px, 0);
  }
  100% {
    -webkit-transform: translate(0, 0);
  }
}

@-ms-keyframes shake {
  0% {
    -ms-transform: translate(3px, 0);
  }
  50% {
    -ms-transform: translate(-3px, 0);
  }
  100% {
    -ms-transform: translate(0, 0);
  }
}

@-o-keyframes shake {
  0% {
    -o-transform: translate(3px, 0);
  }
  50% {
    -o-transform: translate(-3px, 0);
  }
  100% {
    -o-transform: translate(0, 0);
  }
}

@keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(0deg);
  }
  85% {
    transform: rotate(5deg);
  }
  95% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@media only screen and (max-width: 768px) {
  .links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .link-text {
    margin: 0.15em;
  }

  .light-link-text {
    margin: 0.15em;
  }
}
</style>
