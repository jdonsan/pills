<template>
  <header class="navbar">
    <h1>Pills</h1>

    <nav>
      <ul>
        <li>Acerca de</li>
        <li>Partreon</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'navbar'
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_colors';

.navbar {
  position: fixed;
  background: $color-basic-ligth;
  left: 0;
  right: 0;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h1 {
    margin: 0;
  }

  ul {
    list-style: none;
    background: red;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
    }
  }
}
</style>



