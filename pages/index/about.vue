<template>
  <div class="about-view">
    <p
      class="about-text is-size-4 is-size-6-mobile"
      :class="{ light: isLight }"
    >
      Welcome, friend!
      <br />
      <br />Here you'll find several things: projects I've worked on, scheduled
      talks, and my blog. I'm fairly new to the tech industry, having worked in
      several completely-unrelated professions before my current role as a full
      stack engineer (Ask me about my transition!).
      <br />
      <br />When I'm not building/coding stuff, you can usually find me making
      screeching noises on my violin, attempting to play hockey, hiking, or
      spending time with my wife Megan.
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    isLight: Boolean
  }
};
</script>

<style scoped>
.about-view {
  padding: 3em;
  max-width: 75vw;
  height: 60vh;
  display: flex;
  align-items: center;
}

.about-text {
  color: white;
  font-family: "Gotu", sans-serif;
}

.light {
  color: #113134;
}

@media only screen and (max-width: 768px) {
  .about-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 75vh;
    max-width: 100%;
    padding: 0em 3em;
    margin: 4.5em 0em;
  }
}
</style>
