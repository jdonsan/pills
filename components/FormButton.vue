<template>
  <button class="form-button">{{ value }}</button>
</template>

<script>
export default {
  name: 'form-button',
  props: {
    value: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_colors";

.form-button {
  background: $color-primary;
  font-size: 1rem;
  text-transform: uppercase;
  color: $color-basic-ligth;
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  border-radius: 2px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  display: block;
  width: 100%;
  border: 0;
}
</style>


