<template>
  <div class="form-field">
    <label :for="forLabel">{{ label }}</label>
    <slot></slot>
    <small>Esto es un error</small>
  </div>
</template>

<script>
export default {
  name: 'form-field',
  props: {
    forLabel: { type: String, required: true },
    label: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
.form-field {
  padding-bottom: 0.5rem 0;

  label,
  small {
    display: block;
    width: 100%;
    padding: 0.5rem;
  }

  small {
    color: red;
  }
}
</style>


