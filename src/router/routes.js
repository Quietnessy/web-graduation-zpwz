// 资产管理
import AssetIndex from '../views/Assets/index.vue'
// import Assets from '../views/Assets/AssetList.vue'
import Home from '../views/Assets/AssetList.vue'

// 内容管理
import ContentIndex from '../views/Content/index.vue'
// import Content from '../views/Content/ContentList.vue'
import MoneyManage from '../views/Content/Money.vue'
import FinderIndex from '../views/Search/FinderIndex.vue'
import Campus from '../views/Campus/CampusIndex.vue'
import Company from '../views/Company/CompanyIndex.vue'
import Account from '../views/Account/index.vue'
import Login from '../views/Login/LoginIndex.vue'
const routes = [
  {
    path: '/',
    name: '首页',
    component: AssetIndex,
    redirect: '/home',
    meta: {
      isMenuItem: false
    }
  },
  {
    path: '/home',
    name : '首页',
    component: Home,
    meta: {
      isMenuItem: true
    }
  },
  {
    path: '/content',
    name: '职位',
    component: ContentIndex,
    meta: {
      isMenuItem: true
    }
  },
  {
    path: '/search',
    name: '发现',
    component: FinderIndex,
    meta: {
      isMenuItem: true
    }
  },
  {
    path: '/campus',
    name: '校园',
    component: Campus,
    meta: {
      isMenuItem: true
    }
  },
  {
    path: '/company',
    name: '公司',
    component: Company,
    meta: {
      isMenuItem: true
    }
  },
  {
    path: '/account',
    name: '个人中心',
    component: Account,
    meta: {
      isMenuItem: true
    }
  },
  {
    path: '/login',
    name: '登录/注册',
    component: Login,
    meta: {
      isMenuItem: true
    }
  }
]

export default routes