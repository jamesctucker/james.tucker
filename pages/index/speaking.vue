<template>
  <div class="talks-view">
    <p class="talks-text is-size-3 has-text-left" :class="{ light: isLight }">
      Coming soon!
    </p>
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
  display: flex;
  align-items: center;
}

.talks-text {
  color: white;
  font-family: "Gotu", sans-serif;
}

.light {
  color: #113134;
}

@media only screen and (max-width: 768px) {
  .talks-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 60vh;
  }
}
</style>
