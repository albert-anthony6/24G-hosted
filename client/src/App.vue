<template>
  <div id="app">
    <Alerts v-bind:user="globalUser"/>
    <Header v-bind:user="globalUser"/>
    <router-view></router-view>
    <img class="24g" src="./assets/powered_by_24g.svg" alt="powered-by-24g">
  </div>
</template>

<script>
    import Alerts from './components/Alerts.component';
    import Header from './components/Header.component';

export default {
  name: 'App',
  data() {
      return {
          globalUser: null
      }
  },
  components: {
    Alerts,
    Header
  },
  mounted(){
    if (sessionStorage.user) {
      this.globalUser = JSON.parse(sessionStorage.user);
    }
  }
}
</script>

<style lang="scss">
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body{
    overflow-x: hidden;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    height: 100vh;
    font-size: 1.4rem;
    color: #000;
    line-height: 1.4;
    position: relative;

    img:last-child{
      width: 23rem;
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }

</style>
