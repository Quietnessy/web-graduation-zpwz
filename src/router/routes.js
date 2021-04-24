// 资产管理
import AssetIndex from '../views/Home/index.vue'

import Home from '../views/Home/HomePage.vue'
import notFound from '../views/Home/404.vue'

// 内容管理
import PositionIndex from '../views/Position/index.vue'
import PositionDetail from '../views/Position/PositionDetails.vue'
import OnlineResume from '../views/Account/OnlineResume.vue'
import Position from '../views/Position/PositionIndex.vue'
import FinderIndex from '../views/Search/FinderIndex.vue'
import Campus from '../views/Campus/CampusIndex.vue'
import Company from '../views/Company/CompanyIndex.vue'
import Account from '../views/Account/index.vue'
import Login from '../views/Login/LoginIndex.vue'
import Recode from '../views/Account/Recode.vue'
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
    path: '/position',
    name: '职位',
    component: Position,
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
    redirect: '/recode',
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
  },
  {
    path: '/notfound',
    name: '404页面',
    component: notFound,
    meta: {
      isMenuItem: false
    }
  },
  {
    path: '/postiondetails',
    name: '职位详情',
    component: PositionDetail,
    meta: {
      isMenuItem: false
    }
  },
  {
    path: '/onlineresume',
    name: '在线简历',
    component: OnlineResume,
    meta: {
      isMenuItem: false
    }
  },
  {
    path: '/recode',
    name: '投递记录',
    component: Recode,
    meta: {
      isMenuItem: false
    }
  }
]

export default routes