<template>
  <div id="app">
    <div id="mynav" v-if="!this.$store.state.isHideMenu">
      <div id="nav">
        <Menu></Menu>
      </div>
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
#app
  background-color #f6f6f8
  input
    font-size 13px
  #mynav
    position relative
    height 50px
    z-index 1000
    #nav
      position fixed
      width 100%
      height 50px
</style>
