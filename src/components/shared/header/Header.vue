<template>
<header>
  <div class="container box">
    <router-link to="/"><h1>BOHRER.</h1></router-link>

    <nav>
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/skills">Skills</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </div>
</header>
</template>

<script>
export default {

}
</script>

<style>

header {
  background-color: #0f0e17;
  padding: 20px;
}

.box {
  display: flex;
  justify-content: space-between;
}

nav {
  display: flex;
  align-items: center;
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