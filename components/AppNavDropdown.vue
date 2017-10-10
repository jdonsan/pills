<template>
  <li class="app-nav-dropdown">
    {{ label }}<img src="~/assets/img/icons/arrow_drop_down.png" alt="icon">
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
    padding: 1rem 0 .5rem;

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
        padding: .5rem;
    }
  }
}
</style>

