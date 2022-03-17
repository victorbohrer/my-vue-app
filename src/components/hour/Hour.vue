<template>
  <section class="container">

  <Title title="IAM A CLOCK"/>

  <div class="box">
    <span>{{hour}}</span>
    <span>{{minutes}}</span>
    <span>{{seconds}}</span>
  </div>
  <div class="btn">
    <button @click="theTime">QUE HORAS SÃO?</button>
  </div>
  </section>
</template>

<script>

import Title from '../shared/title/Title.vue'
export default {

  components : {
    Title
  },

  data() {
    return {
      hour: '',
      minutes: '',
      seconds: ''
    }
  },

  methods : {
    theTime() {
      let date = new Date()

      let hour = date.getHours() 
      let minutes = date.getMinutes() 
      let seconds = date.getSeconds() 

      this.hour = hour  
      this.minutes = minutes
      this.seconds = seconds
    }
  }
}
</script>

<style scoped>

section {
  padding: 150px 0px 400px;
}


.box {
  border: 1px solid #a7a9be;
  border-radius: 3px;
  padding: 100px;
  display: flex;
  justify-content: space-between;
}

.btn {
  display: flex;
  justify-content: center;
}

button {
  border: 1px solid #ff8906;
  background-color: transparent;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  margin-top: 20px;
}

span {
  font-family: Helvetica, sans-serif;
  font-size: 30px;
}


</style>