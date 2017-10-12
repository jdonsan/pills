<template>
  <div class="preview-pills-item">
    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
    <h5>3 minutos</h5>
    <tag-list />
  </div>
</template>

<script>
import TagList from '~/components/TagList.vue';

export default {
  name: 'preview-pills-item',
  components: {
    TagList
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

.preview-pills-item {
  background: $color-basic-dark;
  border-radius: 2px;
  padding: 1rem;
  cursor: pointer;

  h5,
  h4 {
    padding: 0;
    margin: 0;
    margin-bottom: 1.5rem;
  }

  h4 {
    font-weight: lighter;
  }

  button {
    width: 100%;
    border: 0;
    color: $color-basic-ligth;
    background: $color-dark;
    padding: .5rem;
    text-transform: uppercase;
  }
}
</style>



