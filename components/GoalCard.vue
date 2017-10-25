<template>
  <div class="goal-card">
    <span class="goal-card-ready" v-if="!goal.ready">En desarrollo</span>
    <img :src="goal.img" :alt="goal.title">
    <h3>{{ goal.title }}</h3>
    <p>{{ goal.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'goal-card',
  props: {
    goal: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
.goal-card-ready {
  background: yellow;
  display: inline-block;
  padding: 0.1rem 0.5rem;
  position: absolute;
  top: 1rem;
  margin-left: -0.5rem;
}

.goal-card {
  position: relative;

  img {
    width: 100%;
    border-radius: 2px;
  }
}
</style>


