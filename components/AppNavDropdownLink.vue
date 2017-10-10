<template>
  <li>
    <nuxt-link :to="to">
      <slot></slot>
    </nuxt-link>
  </li>
</template>

<script>
import AppNuxtLink from '~/components/AppNuxtLink';

export default {
  name: 'app-nav-dropdown-link',
  components: {
    AppNuxtLink
  },
  props: {
    to: { type: String, require: true }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: #222;
  text-decoration: none;
}
</style>


