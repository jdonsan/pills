<template>
  <div class="goal-card">
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
.goal-card {
  img {
    width: 100%;
    border-radius: 2px;
  }
}
</style>


