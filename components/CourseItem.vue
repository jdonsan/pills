<template>
  <app-nuxt-link class="course-item" to="/">
    <img :src="course.img" :alt="course.title" />
    <h3>{{ course.title }}</h3>
    <p>{{ course.pills }} pills</p>
  </app-nuxt-link>
</template>

<script>
import AppNuxtLink from '~/components/AppNuxtLink';

export default {
  name: 'course-item',
  components: {
    AppNuxtLink
  },
  props: {
    course: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

.course-item {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: #222;
  background: $color-primary;
  color: $color-basic-ligth;
  grid-column-start: 1;
  grid-column-end: end;
  padding-right: 1rem;

  img {
    width: 5rem;
    height: 5rem;
  }

  h3 {
    width: 100%;
    padding: 0 1rem;
    margin: 0;
    font-size: 1rem;
    font-weight: lighter;
  }

  p {
    text-align: center;
    margin: 0;
    font-weight: bold;
  }
}
</style>


