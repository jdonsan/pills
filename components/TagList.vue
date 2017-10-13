<template>
  <ul class="tag-list">
    <li v-for="tag in tags" :key="tag">{{ tag }}</li>
  </ul>
</template>

<script>
export default {
  name: 'tag-list',
  props: {
    tags: {
      type: Array,
      required: false,
      default: () => ['front', 'ux']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

.tag-list {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 2rem;
  width: 100%;

  li {
    display: inline-block;
    background: $color-dark;
    padding: .3rem 1rem;
    margin-right: .5rem;
    color: $color-primary;
    font-weight: bold;
  }
}
</style>


