<template>
  <div id="app">
    <div id="nav">
      <Menu></Menu>
    </div>
   <router-view></router-view>
  </div>
</template>
<script>
import Menu from './components/Menu.vue'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    Menu
  }
}
</script>
<style lang="stylus">
</style>
