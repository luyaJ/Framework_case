<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    // fetch
    // fetch('/apis/test/testToken.php', {
    //   method: 'post',
    //   headers: { token: 'f4c902c9ae5a2a9d8f84868ad064e706'},
    //   body: JSON.stringify({
    //     username: 'luyaj',
    //     password: '123123'
    //   })
    // })
    // .then(res => {
    //   return res.json()
    // })
    // .then(data => {
    //   console.log(data)
    // })

    // axios
    const info = {username: 'luyaj', password: '123123'}
    this.$axios.post('/apis/test/testToken.php', info)
      .then(data => console.log(data))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
