<template>
  <div class="footer" :class="{ light: isLight }">
    <div class="is-pulled-left">
      <a href="https://github.com/jamesctucker" target="_blank">
        <font-awesome-icon
          :icon="['fab', 'github']"
          class="social-icon is-hidden-mobile"
          :class="{ 'light-text': isLight }"
          size="lg"
        />
      </a>
      <a href="https://linkedin.com/in/jtuckermn" target="_blank">
        <font-awesome-icon
          :icon="['fab', 'linkedin']"
          class="social-icon is-hidden-mobile"
          :class="{ 'light-text': isLight }"
          size="lg"
        />
      </a>
      <a href="https://instagram.com/jtuckermn" target="_blank">
        <font-awesome-icon
          :icon="['fab', 'instagram']"
          class="social-icon is-hidden-mobile"
          :class="{ 'light-text': isLight }"
          size="lg"
        />
      </a>
      <a href="https://medium.com/@jchristophertucker" target="_blank">
        <font-awesome-icon
          :icon="['fab', 'medium']"
          class="social-icon is-hidden-mobile"
          :class="{ 'light-text': isLight }"
          size="lg"
        />
      </a>
    </div>
    <div class="is-pulled-right">
      <div class="text is-size-7-mobile" :class="{ 'light-text': isLight }">
        © Copyright 2019
      </div>
      <div class="text is-size-7-mobile" :class="{ 'light-text': isLight }">
        <p>
          Theme by James Tucker
        </p>
        <p>
          Proudly made with
          <a href="https://vuejs.org/" target="_blank">Vue</a> & lots of Scotch
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    isLight: Boolean
  }
};
</script>

<style scoped>
.footer {
  border-top: 1px dotted white;
  background: #113134;
  width: 100%;
  padding: 1.75em;

  /* display: flex;
  justify-content: center; */
}

.social-icon {
  margin: 0.5em 0.5em 0em 0em;
  color: white;
}

.text {
  color: white;
}

.light-text {
  color: #113134;
}

.light {
  border-top: 1px solid #113134;
  background: white;
}

@media only screen and (max-width: 768px) {
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    padding: 1.75em;
  }
}
</style>
