<template>
  <div class="talks-view">
    <p class="talks-text is-size-3" :class="{ light: isLight }">Coming soon!</p>
  </div>
</template>

<script>
export default {
  name: "Speaking",
  props: {
    isLight: Boolean
  }
};
</script>

<style scoped>
.talks-view {
  height: 60vh;
  padding: 3em;
  display: flex;
  align-items: center;
}

.talks-text {
  color: white;
  font-family: "Work Sans", sans-serif;
}

.light {
  color: black;
}

@media only screen and (max-width: 768px) {
  .talks-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    padding: 3.5em;
  }
}
</style>
