<template>
  <li>
    {{ label }}
  </li>
</template>

<script>
export default {
  name: 'app-nav-dropdown-item',
  props: {
    label: { type: String, required: true }
  }
}
</script>

