<template>
<header>
  <div class="container box">
    <h1>BOHRER.</h1>

    <nav>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Contact</a></li>
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

li a {
  color: #fffffe;
  text-decoration: none;
  font-family: Helvetica, sans-serif;
}

</style>