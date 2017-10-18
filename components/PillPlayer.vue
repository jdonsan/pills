<template>
  <section class="pill-player">
    <video controls poster="~/assets/img/vue.jpg">
      <source src="~/assets/videos/vue-debug.mp4" type="video/mp4">
    </video>

    <div class="pill-player-sidebar">

    </div>

    <div class="pill-player-info">

    </div>
  </section>
</template>

<script>
export default {
  name: 'pill-player'
}
</script>


<style lang="scss" scoped>
@import '/../assets/scss/_extends';
@import '/../assets/scss/_colors';

.pill-player {
  @extend .container;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "video sidebar" "info info";
  margin-top: -1rem;


  video {
    width: 100%;
    grid-area: video;
  }

  .pill-player-sidebar {
    background: $color-dark;
    width: 100%;
    grid-area: sidebar;
  }

  .pill-player-info {
    height: 3rem;
    padding: 1rem;
    background: $color-basic-dark;
    grid-area: info;
  }
}
</style>