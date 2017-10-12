<template>
  <div class="preview-pills-item">
    <div class="preview-pills-item-header">
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
      <h5>3 minutos</h5>
    </div>

    <tag-list />

    <div class="preview-pills-item-container">
      <p>
        Ut maximus tempus nisl ut finibus. Sed feugiat ligula vitae turpis imperdiet, a aliquet turpis tincidunt. Vestibulum bibendum ipsum libero
      </p>
      <button>Ver</button>
    </div>
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
  border: 1px solid #ddd;
  padding: 1rem;
}

.preview-pills-item-header {
  margin: 0 0 1rem;
  padding-bottom: .5rem; 
  border-bottom: 1px solid #ddd;

  h4,
  h5 {
    padding: 0;
    margin: 0.25rem 0;
  }
}

.preview-pills-item-container {
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



