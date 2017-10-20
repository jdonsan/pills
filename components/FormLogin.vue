<template>
  <form class="form-login"> 
      <form-field-input id="username" label="Usuario" />
      <form-field-input id="password" label="Contraseña" />
      <form-button value="Acceder" />
  </form>
</template>

<script>
import FormFieldInput from '~/components/FormFieldInput';
import FormButton from '~/components/FormButton';

export default {
  name: 'form-login',
  components: {
    FormFieldInput,
    FormButton
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_colors";
@import "../assets/scss/_extends";
@import "../assets/scss/_breakpoints.scss";

.form-login {
  background: $color-basic-dark;
  margin: 1rem;
  padding: 1rem;
  border-radius: 2px;

  @media (min-width: $media-breakpoint-medium) {
    width: 30rem;
    margin: 2rem auto;
  }
}
</style>

