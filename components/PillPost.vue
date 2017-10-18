<template>
  <section class="pill-post">
    <app-subtitle>Resumen</app-subtitle>

    <article>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo voluptatum omnis repellendus in atque dolores veniam, veritatis corporis aperiam suscipit sint sequi natus molestias soluta nobis cumque labore exercitationem?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo voluptatum omnis repellendus in atque dolores veniam, veritatis corporis aperiam suscipit sint sequi natus molestias soluta nobis cumque labore exercitationem?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo voluptatum omnis repellendus in atque dolores veniam, veritatis corporis aperiam suscipit sint sequi natus molestias soluta nobis cumque labore exercitationem?
      </p>
    </article>
  </section>
</template>

<script>
import AppSubtitle from '~/components/AppSubtitle';

export default {
  name: 'pill-post',
  components: {
    AppSubtitle
  }
}
</script>

<style lang="scss" scoped>
@import '/../assets/scss/_extends';

.pill-post {
  @extend .container;
}
</style>

