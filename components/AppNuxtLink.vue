<template>
  <nuxt-link class="Header__Link" :to="path(to)">
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  name: 'app-nuxt-link',
  props: {
    to: { type: String, required: true }
  },
  methods: {
    path(url) {
      return (this.$i18n.locale === 'es' ? url : '/' + this.$i18n.locale + url)
    }
  }
}
</script>
