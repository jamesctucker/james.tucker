<template>
  <div class="work-view is-flex">
    <img
      v-if="!showCharityInfo"
      src="../../static/charity.png"
      alt="charity graphic"
      @click="showCharityInfo = !showCharityInfo"
      class="work-img"
    />
    <div
      v-if="showCharityInfo"
      class="card portfolio-card"
      @click="showCharityInfo = !showCharityInfo"
    >
      <div class="card-content">
        <h3 class="title">Kiva Hero</h3>
        <p>
          Tool that enables donors to fund expiring micro-loans for emerging
          entrepreneurs.
        </p>
        <br />
        <p><b>Technology:</b>&nbsp;React.js, GraphQL, HTML, CSS</p>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            <a
              class="footer-link"
              href="https://kivahero.app/#/"
              target="_blank"
              >View App</a
            >
          </span>
        </p>
        <p class="card-footer-item">
          <span>
            <a
              class="footer-link"
              href="https://github.com/jamesctucker/kiva_hero"
              target="_blank"
              >Github</a
            >
          </span>
        </p>
      </footer>
    </div>
    <img
      v-if="!showSocialInfo"
      src="../../static/social.png"
      alt="social graphic"
      @click="showSocialInfo = !showSocialInfo"
      class="work-img"
    />
    <div
      v-if="showSocialInfo"
      class="card portfolio-card"
      @click="showSocialInfo = !showSocialInfo"
    >
      <div class="card-content">
        <h3 class="title">JourneyTellr</h3>
        <p>
          Storytelling platform for enterprise-level organizations to use
          internally with their employees
        </p>
        <br />
        <p>
          <b>Technology:</b>&nbsp;React.js, Redux, Node.js, AWS S3, PostgreSQL,
          HTML, CSS
        </p>
      </div>

      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            <a
              class="footer-link"
              href="https://journeytellr.herokuapp.com/"
              target="_blank"
              >View App</a
            >
          </span>
        </p>
        <p class="card-footer-item">
          <span>
            <a
              class="footer-link"
              href="https://github.com/jamesctucker/JourneyTellr"
              target="_blank"
              >Github</a
            >
          </span>
        </p>
      </footer>
    </div>
    <img
      v-if="!showStudioInfo"
      src="../../static/studio.png"
      alt="studio graphic"
      @click="showStudioInfo = !showStudioInfo"
      class="work-img"
    />
    <div
      v-if="showStudioInfo"
      class="card portfolio-card"
      @click="showStudioInfo = !showStudioInfo"
    >
      <div class="card-content">
        <h3 class="title">soona</h3>
        <p>
          An innovative media technology platform that provides business-owners
          and creatives with fast, casual content within 24 hours.
        </p>
        <br />

        <p>
          <b>Technology:</b>&nbsp;Vue.js, Rails, Node.js, CometChat, Redis,
          Jest, AWS S3, PostgreSQL, HTML, CSS
        </p>
      </div>

      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            <a class="footer-link" href="https://book.soona.co" target="_blank"
              >View App</a
            >
          </span>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  props: {
    isLight: Boolean
  },
  data() {
    return {
      showCharityInfo: false,
      showSocialInfo: false,
      showStudioInfo: false
    };
  }
};
</script>

<style scoped>
.work-view {
  padding: 2em;
  min-height: 60vh;
  max-width: 100%;
  display: flex;
  align-items: center;
}

.work-text {
  color: white;
  font-family: "Work Sans", sans-serif;
}

.light {
  color: black;
}

.portfolio-card {
  min-height: 400px;
  max-width: 350px;
}

.work-img {
  min-height: 400px;
  min-width: 200px;
}

.work-img:hover {
  cursor: pointer;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-left: 8px solid gray;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.title {
  font-family: "Spectral", serif;
}

.card-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.footer-link {
  color: black;
  font-family: "Spectral", serif;
}

.footer-link:hover {
  color: #f27045;
  text-decoration: underline;
}

@media only screen and (max-width: 768px) {
  .work-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    position: unset;
    margin: 4.25em 0em;
  }

  .work-img {
    margin: 0.5em;
  }
}
</style>
