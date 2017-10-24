<template>
  <main>
    <goal-section>
      <goal-card v-for="goal in goals" :key="goal.id" :goal="goal" />
    </goal-section>

    <app-title>FAQ</app-title>

    <faq-section>
      <faq-item v-for="faq in faqs" :key="faq.id" :question="faq.question">
        <span v-html="faq.answer"></span>
      </faq-item>
    </faq-section>
  </main>
</template>

<script>
import AppTitle from '~/components/AppTitle';
import GoalSection from '~/components/GoalSection';
import GoalCard from '~/components/GoalCard';
import FaqSection from '~/components/FaqSection';
import FaqItem from '~/components/FaqItem';

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
    GoalCard,
    FaqSection,
    FaqItem
  },
  data() {
    return {
      goals: [{
        id: 1,
        img: require('~/assets/img/goals/goal-1.jpeg'),
        title: 'Aprende a tu ritmo',
        description: 'Pills está pensado para gente que cuenta con poco tiempo. Aprovecha esos minutos que te sobran para aprender algo nuevo cada día',
        ready: true
      },
      {
        id: 2,
        img: require('~/assets/img/goals/goal-2.jpeg'),
        title: 'Gestiona tu progreso',
        description: 'Con Pills es más fácil saber cuándo y cómo estudiar. Planifica tus sesiones de formación y decide cuáles serán tus objetivos',
        ready: false
      },
      {
        id: 3,
        img: require('~/assets/img/goals/goal-3.jpeg'),
        title: 'Comparte tu conocimiento',
        description: 'Crea Pills para que otros puedan disfrutar de lo que sabes. De esta forma, podrás ayudar a crear una mejor comunidad',
        ready: false
      }],
      faqs: [{
        question: '¿Qué es Pills?',
        answer: `
          Pills es una plataforma de microvídeos formativos (pills o píldoras). 
          Sabemos que el estudio es importante para ti, pero que no cuentas con 
          el tiempo uficiente como para hacer largos cursos de formación de semanas con 
          lecciones interminables. En Pills, separamos los conceptos clave en videos
          cortos para que en cualquier momento del día puedas aprender algo nuevo.
        `
      },
      {
        question: '¿Cuánto dura cada pill?',
        answer: `
          Para que tu formación sea lo más flexible posible, los vídeos tendrán una duración
          de entre 4 a 8 minutos.
        `
      },
      {
        question: '¿Hay que seguir un orden para ver cada pill?',
        answer: `
          Aunque nosotros te propondremos un orden específico, cada pill contrendrá un concepto 
          específico. Puede que existan conceptos más o menos avanzados, pero se intentará que
          el concepto quede claro de manera práctica y visual.
        `
      },
      {
        question: '¿Cómo puedo colaborar en Pills',
        answer: `
          Si el proyecto te gusta, puedes colaborar de tres maneras: Sube tus microvídeos formativos
          a Pills y enseña lo que sabes al resto de usuarios (esta funcionalidad todavía no se 
          encuentra disponible), <a href="https://github.com/jdonsan/pills/projects/1" target="_blank" rel="noopener">desarrolla alguna de las 
          funcionalidades que puedes encontrar en este tablón</a>. <a href="https://www.patreon.com/_pills" target="_blank" rel="noopener">Haz 
          una aportación económica en el Parteon que hemos habilitado para la causa</a>.
        `
      }]
    }
  }
}
</script>
