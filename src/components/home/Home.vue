<template>
<section class="container content">
  <my-title title="IAM CONTENT"></my-title>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br> 
    Quam odio eligendi cum nam voluptatum iure veritatis eum suscipit<br> 
    reprehenderit eos. Sunt adipisci, voluptates ut veniam libero harum beatae minima aspernatur.<br><br>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br> 
    Quam odio voluptatum iure veritatis eum suscipit<br> 
    reprehenderit eos. Sunt adipisci, voluptates ut veniam libero<br>  
    harum beatae minima aspernatur.<br>
  </p>
</section>
</template>

<script>

import Title from '../shared/title/Title.vue'


export default {

  components: {
    'my-title': Title
  },
  mounted() {  
    document.title = "Home";  
  }
}
</script>

<style scoped>
.content {
  padding: 250px 0 250px;
  background-color: #fffffe;
}

p {
  font-family: Helvetica, sans-serif;
}
</style>