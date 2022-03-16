<template>
  <h2>{{title}}</h2>
</template>

<script>
export default {

    props: {
        title: String
    }

}
</script>

<style>

h2 {
  font-family: Helvetica, sans-serif;
  color: #ff8906;
  margin-bottom: 40px;
  font-size: 44px;
}

</style>