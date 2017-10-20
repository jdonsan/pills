<template>
  <form-field :for-label="id" :label="label">
      <input :id="id" class="form-field-input" type="text" placeholder="Hola que hay" />
  </form-field>
</template>

<script>
import FormField from '~/components/FormField';

export default {
  name: 'form-field-input',
  components: {
    FormField
  },
  props: {
    id: { type: String, required: true },
    label: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
.form-field-input {
  width: 100%;
  padding: 1rem 0.5rem;
  box-sizing: border-box;
  border: 0;
  border-radius: 2px;
}
</style>


