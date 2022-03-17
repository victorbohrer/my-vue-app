<template>
<header>
  <div class="container box">
    <router-link to="/"><h1>BOHRER.</h1></router-link>

    <nav class="nav-desktop">
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/skills">Skills</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/hour">Hour</router-link></li>
      </ul>
    </nav>

    <nav>
      <div class="wrapper" @click="hamburger">
        <span class="menu-wrapper"></span>
        <span class="menu-wrapper"></span>
        <span class="menu-wrapper"></span>
      </div>
    </nav>
  </div>
</header>
</template>

<script>
export default {

  methods: {
    
  }
}
</script>

<style scoped>

header {
  background-color: #0f0e17;
  padding: 20px;
}

.box {
  display: flex;
  justify-content: space-between;
}

.nav-desktop {
  display: flex;
  align-items: center;
}

@media (max-width: 768px){ 
  .nav-desktop {
    display: none;
  }
}


.wrapper {
  display: block;
  height: 42px;
  width: 42px;
  cursor: pointer;
}

@media (min-width: 768px){ 
  .wrapper {
    display: none;
  }
}

.wrapper .menu-wrapper {
  height: 4px;
  width: 100%;
  border-radius: 3px;
  background-color: #fffffe;
  display: block;
  margin-top: 6px;
}

.wrapper .menu-wrapper:nth-child(2) {
  margin-top: 8px;
}

.wrapper .menu-wrapper:nth-child(3) {
  margin-top: 8px;
}

h1 {
  color: #fffffe;
  font-family: Helvetica, sans-serif;
}

ul {
  color: #fffffe;
  list-style: none;
  display: flex;
  gap: 30px;
}

a {
  color: #fffffe;
  text-decoration: none;
  font-family: Helvetica, sans-serif;
}

</style>