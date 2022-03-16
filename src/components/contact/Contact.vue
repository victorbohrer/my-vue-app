<template>
  <section class="container">
    <my-title title="IAM CONTACT"></my-title>
  </section>
</template>

<script>
import Title from '../shared/title/Title.vue'

export default {

  components: {
    'my-title': Title
  },
  mounted() {  
    document.title = "Contact";  
  }

}
</script>

<style scoped>

section {
  padding: 250px 0 250px;
}

</style>