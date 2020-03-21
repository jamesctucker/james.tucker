<template>
  <div class="home-view">
    <div class="columns">
      <div class="column">
        <div class="text-container has-text-centered-touch">
          <h1
            class="has-text-left"
            :class="{ 'white-text': !isLight, 'dark-text': isLight }"
          >
            👋 Hi, I’m James. I’m a full stack developer who loves beautiful
            design.
          </h1>
          <br />
          <p
            class="subtitle"
            :class="{ 'white-text': !isLight, 'dark-text': isLight }"
          >
            I currently work at
            <a href="https://soona.co" target="_blank" class="external-link"
              >soona</a
            >
            in Minneapolis, where I'm helping build a PaaS for fast casual
            content.
          </p>
          <p
            class="subtitle"
            :class="{ 'white-text': !isLight, 'dark-text': isLight }"
          >
            When I'm not coding, you can find me exploring the Twin Cities with
            my wife Megan, trying a new Scotch, or reading a good book.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: { isLight: Boolean }
};
</script>
<style scoped>
.home-view {
  min-height: 60vh;
  width: 75vw;
  display: flex;
  align-items: center;
}

/* .text-container {
  min-width: 60vw;
} */
.subtitle {
  width: 45vw;
  text-align: left;
}

.white-text {
  color: white;
}

.dark-text {
  color: #113134;
}

.personal-avatar {
  border-radius: 50%;
  border: 5px solid #f27045;
}

.personal-avatar-mobile {
  border-radius: 50%;
  border: 5px solid #f27045;
}

.external-link {
  color: #f27045;
}

.external-link:hover {
  text-decoration: underline;
}

@media only screen and (max-width: 768px) {
  .home-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    position: unset;
    margin: 4em 0em;
    width: 100%;
  }

  .subtitle {
    width: 75vw;
  }

  .avatar-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .personal-avatar-mobile {
    border-radius: 50%;
    border: 2px solid #f27045;
  }
}
</style>
