<template>
<my-header></my-header>
<section class="container content">
  <h2>Iam Content</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br> 
    Quam odio eligendi cum nam voluptatum iure veritatis eum suscipit<br> 
    reprehenderit eos. Sunt adipisci, voluptates ut veniam libero harum beatae minima aspernatur.
  </p>
</section>
<my-footer></my-footer>

</template>

<script>

import Home from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'

export default {

  components: {
    'my-header': Home,
    'my-footer': Footer
  }
}
</script>

<style>
.content {
  padding: 170px 0;
}

p {
  font-family: Helvetica, sans-serif;
}

h2 {
  font-family: Helvetica, sans-serif;
  color: #ff8906;
  margin-bottom: 40px;
  font-size: 44px;
}

.container {
  width: 90%;
  margin: 0 auto;
} 

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
