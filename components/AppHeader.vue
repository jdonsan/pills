<template>
  <header class="app-header">
    <h1>
      <app-nuxt-link to="/">Pills</app-nuxt-link>
    </h1>
    <app-nav>
      <app-nav-link to="/login">
        {{ $t('default.login') }}
      </app-nav-link>
      <app-nav-link to="https://www.patreon.com/_pills" :external="true">
        Patreon
      </app-nav-link>
      <app-nav-link to="/about">
        {{ $t('default.about') }}
      </app-nav-link>
      <app-nav-dropdown :label="$t('default.language')">
        <app-nav-dropdown-link :to="$route.fullPath.replace(/^\/[^\/]+/, '')">
          {{ $t('default.spanish') }}
        </app-nav-dropdown-link>
        <app-nav-dropdown-link :to="`/en` + $route.fullPath.replace('/en/', '')">
          {{ $t('default.english') }}
        </app-nav-dropdown-link>
      </app-nav-dropdown>
    </app-nav>
    <app-nav-button />
  </header>
</template>

<script>
import AppNav from '~/components/AppNav';
import AppNavLink from '~/components/AppNavLink';
import AppNavDropdown from '~/components/AppNavDropdown';
import AppNavDropdownLink from '~/components/AppNavDropdownLink';
import AppNavButton from '~/components/AppNavButton';
import AppNuxtLink from '~/components/AppNuxtLink';

export default {
  name: 'app-header',
  components: {
    AppNav,
    AppNavLink,
    AppNavDropdown,
    AppNavDropdownLink,
    AppNavButton,
    AppNuxtLink
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
  width: 100%;
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



