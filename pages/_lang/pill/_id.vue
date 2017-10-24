<template>
  <main>
    <pill-player />
    <pill-post />
    <pill-comments />
  </main>
</template>

<script>
import AppTitle from '~/components/AppTitle';
import PillPlayer from '~/components/PillPlayer';
import PillPost from '~/components/PillPost';
import PillComments from '~/components/PillComments';

export default {
  name: 'pill',
  components: {
    AppTitle,
    PillPlayer,
    PillPost,
    PillComments
  },
  head() {
    return {
      title: 'Pill 1'
    }
  }
}
</script>
