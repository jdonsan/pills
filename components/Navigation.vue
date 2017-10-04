<template>
  <nav class="navigation">
    <ul>
      <li>Acceder</li>
      <li>Partreon</li>
      <li>Acerca de</li>
      <li>Idioma</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';
@import '../assets/scss/_breakpoints';

.navigation {
  ul {
    list-style: none;
    background: $color-basic-ligth;
    margin: 0;
    padding: 1rem;
    position: fixed;
    width: 18rem;
    top: 0;
    bottom: 0;
    left: 0;
    box-shadow: 1px 0px 10px 0px #222;
    display: none;

    @media (min-width: $media-breakpoint-medium) {
      position: initial;
      padding: 0;
      box-shadow: 0 0 0 0;
      width: auto;
      display: block;
    }

    li {
      padding: .5rem 0;

      @media (min-width: $media-breakpoint-medium) {
        display: inline-block;
        padding: 0 0 0 1rem;
      }
    }
  }
}
</style>


