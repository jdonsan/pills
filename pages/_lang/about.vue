<template>
  <main>
    <app-title>
      {{ $t('default.about') }}
    </app-title>

    <goal-section>
      <goal-card v-for="goal in goals" :key="goal.id" :goal="goal" />
    </goal-section>
  </main>
</template>

<script>
import AppTitle from '~/components/AppTitle';
import GoalSection from '~/components/GoalSection';
import GoalCard from '~/components/GoalCard';

export default {
  name: 'about',
  head() {
    return {
      title: this.$t('default.about')
    }
  },
  components: {
    AppTitle,
    GoalSection,
    GoalCard
  },
  data() {
    return {
      goals: [{
        id: 1,
        img: 'http://lorempixel.com/400/200',
        title: 'Aprende a tu ritmo',
        description: 'Pills está pensado para gente que cuenta con poco tiempo. Aprovecha esos minutos que te sobran para aprender algo nuevo cada día',
        ready: true
      },
      {
        id: 2,
        img: 'http://lorempixel.com/400/200',
        title: 'Gestiona tu progreso',
        description: 'Con Pills, es más fácil saber cuándo y cómo estuiar. Planifica tus sesiones de formación y decide cuáles serán tus objetivos',
        ready: false
      },
      {
        id: 3,
        img: 'http://lorempixel.com/400/200',
        title: 'Comparte tu conocimiento',
        description: 'Crea Pills para que otros puedan disfrutar de lo que sabes. De esta forma, podrás ayudar a crear una mejor comunidad',
        ready: false
      }]
    }
  }
}
</script>
