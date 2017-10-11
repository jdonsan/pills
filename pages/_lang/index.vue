<template>
  <main>
    <app-title :landing="true">
      Pills
    </app-title>

    <preview-pills title="Nuevo en Pills">
      <preview-pills-item></preview-pills-item>
      <preview-pills-item></preview-pills-item>
      <preview-pills-item></preview-pills-item>
      <preview-pills-item></preview-pills-item>
      <preview-pills-item></preview-pills-item>
      <preview-pills-item></preview-pills-item>
    </preview-pills>

    <preview-pills title="Próximamente en Pills">
      <preview-pills-item></preview-pills-item>
      <preview-pills-item></preview-pills-item>
    </preview-pills>

  </main>
</template>

<script>
import AppTitle from '~/components/AppTitle';
import PreviewPills from '~/components/PreviewPills';
import PreviewPillsItem from '~/components/PreviewPillsItem';

export default {
  components: {
    AppTitle,
    PreviewPills,
    PreviewPillsItem
  },
  head () {
    return {
      title: 'Home'
    }
  }
}
</script>

