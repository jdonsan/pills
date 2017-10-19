<template>
  <div class="pill-card">
    <h4>
      <app-nuxt-link :to="to">{{ pill.title }}</app-nuxt-link>
    </h4>
    <h5>{{ pill.time }}</h5>
    <tag-list :tags="pill.tags" />
  </div>
</template>

<script>
import TagList from '~/components/TagList';
import AppNuxtLink from '~/components/AppNuxtLink';

export default {
  name: 'pill-card',
  components: {
    TagList,
    AppNuxtLink
  },
  props: {
    pill: { type: Object, required: true }
  },
  computed: {
    to() {
      return '/pill/' + this.pill.id;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

.pill-card {
  background: $color-basic-dark;
  border-radius: 2px;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;

  h5,
  h4 {
    padding: 0;
    margin: 0;
    width: 100%;
  }

  h4 {
    a {
      text-decoration: none;
      font-style: none;
      color: #222;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  h5 {
    font-weight: lighter;
  }
}
</style>



