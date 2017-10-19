<template>
  <main>
    <app-title :landing="true">Aprende mucho en poco tiempo</app-title>

    <call-to-action />

    <pill-section title="Y además...">
      <pill-card v-for="pill in newPills" :key="pill.id" :pill="pill" />
    </pill-section>

    <pill-section title="Próximamente...">
      <pill-card v-for="pill in soonPills" :key="pill.id" :pill="pill" />
    </pill-section>

    <pill-section title="Cursos completos">
      <course-item :course="course" />
    </pill-section>
  </main>
</template>

<script>
import AppTitle from '~/components/AppTitle';
import PillSection from '~/components/PillSection';
import PillCard from '~/components/PillCard';
import CallToAction from '~/components/CallToAction';
import CourseItem from '~/components/CourseItem';

export default {
  components: {
    AppTitle,
    PillSection,
    PillCard,
    CallToAction,
    CourseItem
  },
  head() {
    return {
      title: 'Home'
    }
  },
  data() {
    return {
      newPills: [
        { id: 1, title: 'Creando un nuevo componente', time: '2 minutos', tags: ['js', 'vue'] },
        { id: 2, title: 'Usando eventos personalizados', time: '4 minutos', tags: ['js', 'vue'] },
        { id: 3, title: '¿Qué es la currificación?', time: '1 minuto', tags: ['funcional'] },
        { id: 4, title: 'Usando las nuevas funcionalidades de vue-cli', time: '5 minutos', tags: ['js', 'vue'] },
        { id: 5, title: 'Tres formas de usar dependencias en Node', time: '5 minutos', tags: ['js', 'node'] }
      ],
      soonPills: [
        { id: 1, title: 'Creando un nuevo componente', time: '2 minutos', tags: ['js', 'vue'] },
        { id: 2, title: 'Usando eventos personalizados', time: '4 minutos', tags: ['js', 'vue'] }
      ],
      course: {
        img: require('~/assets/img/vue.jpg'),
        title: 'Desarrolla aplicaciones con VueJS',
        pills: 53
      }
    }
  }
}
</script>

