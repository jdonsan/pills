<template>
  <header class="navbar">
    <h1>Pills</h1>
    <navigation />
    <navigation-button />
  </header>
</template>

<script>
import Navigation from '~/components/Navigation';
import NavigationButton from '~/components/NavigationButton';

export default {
  name: 'navbar',
  components: {
    Navigation,
    NavigationButton
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';
@import '../assets/scss/_breakpoints';
@import '../assets/scss/_extends';

.navbar {
  @extend .container;

  background: $color-basic-ligth;
  left: 0;
  right: 0;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0;
  }
}
</style>



