<template>
  <main>
    <app-title>
      Pill
    </app-title>

    <section class="player-pill">
      <video controls poster="~/assets/img/vue.jpg">
        <source src="~/assets/videos/vue-debug.mp4" type="video/mp4">
      </video>
      <div class="player-pill-sidebar">

      </div>
      <div class="player-pill-info">

      </div>
    </section>

    <section >
      <h3>Resumen</h3>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo voluptatum omnis repellendus in atque dolores veniam, veritatis corporis aperiam suscipit sint sequi natus molestias soluta nobis cumque labore exercitationem?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo voluptatum omnis repellendus in atque dolores veniam, veritatis corporis aperiam suscipit sint sequi natus molestias soluta nobis cumque labore exercitationem?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo voluptatum omnis repellendus in atque dolores veniam, veritatis corporis aperiam suscipit sint sequi natus molestias soluta nobis cumque labore exercitationem?
      </p>
    </section>
  </main>
</template>

<script>
import AppTitle from '~/components/AppTitle';

export default {
  name: 'pill',
  components: {
    AppTitle
  },
  head() {
    return {
      title: 'Pill 1'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/_extends';
@import '../../../assets/scss/_colors';

.player-pill {
  @extend .container;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "video sidebar" "info info";


  video {
    width: 100%;
    grid-area: video;
  }

  .player-pill-sidebar {
    background: $color-dark;
    width: 100%;
    grid-area: sidebar;
  }

  .player-pill-info {
    height: 3rem;
    padding: 1rem;
    background: $color-basic-dark;
    grid-area: info;
  }
}
</style>






