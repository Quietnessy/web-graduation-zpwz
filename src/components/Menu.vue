<template>
  <div class="menu-container">
    <img src="https://static.zhipin.com/zhipin-geek/v399/web/geek/images/logo-2x.png" alt="招聘logo" class="icon-logo">
    <Menu theme="light" mode="horizontal" :active-name="activeItem" :open-names="openMenu" @on-select="gotoPage" class="my-menu">
      <div v-for="(menuItem, menuIndex) in menuList" :key="menuIndex">
        <Submenu :name="menuItem.name" v-if="menuItem.children && menuItem.children.length > 0">
          <template slot="title">
            {{ menuItem.name }}
          </template>
          <template v-for="(subMenuItem, subMenuIndex) in menuItem.children">
            <MenuItem v-if="subMenuItem.meta.isMenuItem"
            :key="`${menuItem}-${subMenuIndex}`"
            :name="subMenuItem.path">
                {{ subMenuItem.name }}
            </MenuItem>
          </template>
        </Submenu>
        <MenuItem v-else-if="menuItem.meta.isMenuItem" :name="menuItem.path" class="menu-item">
            {{ menuItem.name }}
        </MenuItem>
      </div>
      <div class="user-name">{{ username }}</div>
    </Menu>
  </div>
</template>

<script>
import routes from '../router/routes'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['userName']),
  },
  data () {
    return {
      menuList: [],
      openMenu: [],
      activeItem: '',
      username: ''
    }
  },
  watch:{
    $route(to, from, next){
      this.configActiveMenu()
      if (to.matched.length === 0) {
        this.$router.push('/notfound')
      }
    },
    userName (curVal) {
      console.log('用户名称改变了')
      this.username = curVal
    }
  },
  created () {
    this.menuList = routes
    this.configActiveMenu()
  },
  methods: {
    gotoPage (router) {
      console.log(router, '这是router')
      if (this.$router.history.current.path === router) return
      this.$router.push(router)
      this.configActiveMenu()
    },
    configActiveMenu () {
      if (this.openMenu.length) {
        this.openMenu.pop(0)      
      }
      this.openMenu.push(this.CurparentRouter)
      this.activeItem = String(window.location.hash.slice(1))
    }
  },
  computed: {
    CurparentRouter () {
      return String(this.$router.history.current.matched[0].name)
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu-container
  position relative
  .icon-logo
    width 110px
    position absolute
    left 10%
    top 30%
    z-index 1000
  .my-menu
    padding-left 21%
    border-bottom none
    height 50px
    line-height 50px
    .menu-item
      width 100px
      height 50px
      text-align center
  .user-name
    position absolute
    right 20%
</style>