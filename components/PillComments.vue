<template>
  <section class="pill-comments">
    <div id="disqus_thread">
    </div>
  </section>
</template>

<script>
export default {
  name: 'pill-comments',
  mounted() {
    window.disqus_config = function() {
      this.page.url = '';
      this.page.identifier = '';
    };

    let d = document;
    let s = d.createElement('script');

    s.src = 'https://pills-comments.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }
}
</script>  

<style lang="scss" scoped>
@import '/../assets/scss/_extends';

.pill-comments {
  @extend .container;
  margin-bottom: 5rem;
}
</style>
          
