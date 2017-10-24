<template>
  <li class="app-nav-dropdown">
    {{ label }}<img src="~/assets/img/icons/arrow_drop_down.png" alt="">
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'app-nav-dropdown',
  props: {
    label: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';
@import '../assets/scss/_breakpoints';

.app-nav-dropdown {
  position: relative;
  padding: 1rem 0;

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
    display: none;

    @media (min-width: $media-breakpoint-medium) {
      display: initial;
    }
  }


  ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
    border-top: 1px solid $color-basic-dark;

    @media (min-width: $media-breakpoint-medium) {
      border-top: 0;
      margin: 0;
      padding: 1rem 0 .5rem;
      background: $color-basic-ligth;
      position: absolute;
      display: none;
      top: 100%;
      right: -1rem;
      text-align: center;

      &:hover {
        display: block;
      }

      li {
        display: inline-block;
      }
    }

    li {
      padding: 1rem 0;

      @media (min-width: $media-breakpoint-medium) {
        padding: .5rem;
      }
    }
  }
}
</style>

