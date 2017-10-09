<template>
  <li class="app-nav-menu-dropdown">
    {{ value }}<img src="~/assets/img/icons/arrow_drop_down.png" alt="icon">

    <ul>
      <li>Español</li>
      <li>Inglés</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'app-nav-menu-dropdown',
  props: {
    value: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';
@import '../assets/scss/_breakpoints';

.app-nav-menu-dropdown {
  padding: 1rem 0;
  position: relative;

  @media (min-width: $media-breakpoint-medium) {
    display: inline-block;
    padding: 0 0 0 1.5rem;
  }

  &:hover {
    cursor: pointer;

    ul {
      display: block;
    }
  }

  img {
    vertical-align: text-bottom;
  }


  ul {
    list-style: none;
    margin: 0;
    padding: 1rem 0;

    @media (min-width: $media-breakpoint-medium) {
      background: $color-basic-ligth;
      position: absolute;
      display: none;
      top: 100%;
      right: -1rem;

      &:hover {
        display: block;
      }

      li {
        display: inline-block;
      }
    }

    li {
        padding: 1rem;
    }
  }
}
</style>

