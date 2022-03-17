<template>
  <my-header></my-header>
    <router-view></router-view>
  <my-footer></my-footer>
</template>

<script>

import Header from './components/shared/header/Header.vue'
import Footer from './components/shared/footer/Footer.vue'

export default {

  mounted() {
    document.title = 'Home'
  },

  components: {
    'my-header': Header,
    'my-footer': Footer,
  }
}
</script>

<style>
.content {
  padding: 210px 0;
}

p {
  font-family: Helvetica, sans-serif;
}

h2 {
  font-family: Helvetica, sans-serif;
  color: #ff8906;
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
