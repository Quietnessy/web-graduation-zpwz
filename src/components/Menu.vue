<template>
  <div class="menu-container">
    <div class="icon-logo" @click="gotoHomepage">
      伯乐直聘
    </div>
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
        <MenuItem v-else-if="menuItem.meta.isMenuItem && menuItem.meta.owner === $store.state.curRole" :name="menuItem.path" class="menu-item">
            {{ menuItem.name }}
        </MenuItem>
      </div>
      <div class="user-name">
        <Dropdown @on-click="dropDowmClick">
          {{ this.$store.state.userName }}
          <DropdownMenu slot="list">
            <DropdownItem name="myinfo">个人资料</DropdownItem>
            <DropdownItem divided name="changepassword">修改密码</DropdownItem>
            <DropdownItem divided name="logout">退出登录</DropdownItem>
          </DropdownMenu>
        </Dropdown> 
        <img 
          :src="this.$store.state.userImageUrl"
          v-if="this.$store.state.userImageUrl" 
          style="width:26px;border-radius: 50%;cursor: pointer; position: absolute; left: 85px;top: 13px"
          @click="gotoMycenter">
      </div>
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
      activeItem: ''
    }
  },
  watch:{
    $route(to, from, next){
      this.configActiveMenu()
      if (to.matched.length === 0) {
        this.$router.push('/notfound')
      }
    }
  },
  created () {
    this.menuList = routes
    this.configActiveMenu()
  },
  methods: {
    // 点击用户名下拉框的菜单项事件
    dropDowmClick (curName) {
      if (curName === 'myinfo') {
        // 进入我的信息页面
      }
      if (curName === 'changepassword') {
        // 进入更改密码页面
        this.$router.push('/login')
      }
      if (curName === 'logout') {
        // 退出登录页面
      }
    },
    // 点击网站logo去首页
    gotoHomepage () {
      this.$router.push('/home')
    },
    // 点击菜单栏的事件
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
    },
    gotoMycenter () {
      this.$router.push('/onlineresume')
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
    height 50px
    line-height 50px
    letter-spacing 3px
    position absolute
    left 10%
    z-index 1000
    font-size 20px
    font-weight 500
    color #00C2B3
    &:hover
      cursor pointer
  .my-menu
    padding-left 21%
    border-bottom none
    height 50px
    line-height 50px
    .menu-item
      width 110px
      height 50px
      text-align center
  .user-name
    margin-left 20px
    position absolute
    right 20%
    line-height 50px
    cursor pointer
</style>