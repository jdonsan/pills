<template>
  <nuxt-link :class="{ button: isButton }" :to="path(to)">
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  name: 'app-nuxt-link',
  props: {
    to: { type: String, required: true },
    isButton: { type: Boolean, default: false }
  },
  methods: {
    path(url) {
      return (this.$i18n.locale === 'es' ? url : '/' + this.$i18n.locale + url)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

.button {
  background: $color-primary;
  font-size: 1rem;
  text-transform: uppercase;
  color: $color-basic-ligth;
  padding: 1rem 1.5rem;
  margin: 1rem;
  border-radius: 2px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  display: inline-block;
}
</style>

