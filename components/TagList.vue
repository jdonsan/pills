<template>
  <ul class="tag-list">
    <li v-for="tag in tags" :key="tag" :class="'tag-' + random()">{{ tag }}</li>
  </ul>
</template>

<script>
export default {
  name: 'tag-list',
  props: {
    tags: {
      type: Array,
      required: false,
      default: ['front', 'ux', 'back']
    }
  },
  methods: {
    random() {
      return Math.floor((Math.random() * 5) + 1);
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-1 {
  background: #E52D3D;
}

.tag-2 {
  background: #FF8026;
}

.tag-3 {
  background: #F2C900;
}

.tag-4 {
  background: #95D836;
}

.tag-5 {
  background: #2FBF83;
}

.tag-list {
  list-style: none;
  padding: 0;
  margin: .5rem 0;
  width: 100%;
  text-align: center;

  li {
    display: inline-block;

    padding: .3rem 1rem;
    margin-right: .5rem;
  }
}
</style>


