<template>
  <div class="preview-pills-item">
    <div class="preview-pills-item-header">
      <span>3 mins.</span>
      <img src="http://lorempixel.com/300/100/" alt="">
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
    </div>

    <div class="preview-pills-item-container">
      <ul>
        <li>front</li>
        <li>ux</li>
        <li>back</li>
      </ul>
      <p>
        Ut maximus tempus nisl ut finibus. Sed feugiat ligula vitae turpis imperdiet, a aliquet turpis tincidunt. Vestibulum bibendum ipsum libero
      </p>
      <button>Ver</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview-pills-item'
}
</script>

<style lang="scss" scoped>
.preview-pills-item {
  img {
    width: 100%;
  }
}
</style>



