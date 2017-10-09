<template>
  <header class="app-header">
    <h1>
      <nuxt-link to="/">Pills</nuxt-link>
    </h1>
    <app-nav>
      <app-nav-link to="/login" :value="$t('default.login')" />
      <app-nav-link to="https://www.patreon.com/" value="Patreon" :external="true" />
      <app-nav-link to="/about" :value="$t('default.about')" />
      <app-nav-dropdown :value="$t('default.language')">
        <app-nav-dropdown-item label="Español" />
        <app-nav-dropdown-item label="Inglés" />
      </app-nav-dropdown>
    </app-nav>
    <app-nav-button />
  </header>
</template>

<script>
import AppNav from '~/components/AppNav';
import AppNavLink from '~/components/AppNavLink';
import AppNavDropdown from '~/components/AppNavDropdown';
import AppNavDropdownItem from '~/components/AppNavDropdownItem';
import AppNavButton from '~/components/AppNavButton';

export default {
  name: 'app-header',
  components: {
    AppNav,
    AppNavLink,
    AppNavDropdown,
    AppNavDropdownItem,
    AppNavButton
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';
@import '../assets/scss/_breakpoints';
@import '../assets/scss/_extends';

.app-header {
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

    a {
      color: #222;
      text-decoration: none;
    }
  }
}
</style>



