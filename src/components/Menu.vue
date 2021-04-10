<template>
  <div class="menu-container">
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
        <MenuItem v-else :name="menuItem.path" class="menu-item">
            {{ menuItem.name }}
        </MenuItem>
      </div>
      <div class="user-name">{{ userName }}</div>
    </Menu>
  </div>
</template>

<script>
import routes from '../router/routes'
export default {
  data () {
    return {
      menuList: [],
      openMenu: [],
      activeItem: '',
      userName: 'xiaoxuyang_i'
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
  .my-menu
    padding-left 230px
    background-color black
    color #ffffff
    height 50px
    line-height 50px
    .menu-item
      width 100px
      height 50px
      color #ffffff
      text-align center
  .user-name
    position absolute
    right 20%
</style>