// 资产管理
import HomeIndex from '../views/Home/index.vue'

import Home from '../views/Home/HomePage.vue'  // 招聘者首页
import Rhome from '../views/Home/RhomePage.vue'  // 求职者首页
import notFound from '../views/Home/404.vue' // 404页面

// 内容管理
import PositionIndex from '../views/Position/index.vue'
import FinderIndex from '../views/Search/FinderIndex.vue'
import Campus from '../views/Campus/CampusIndex.vue'
import Company from '../views/Company/CompanyIndex.vue'
import PositionDetail from '../views/Position/PositionDetails.vue'
import OnlineResume from '../views/Account/OnlineResume.vue'
import myOnlineResume from '../views/Account/myOnlineresume.vue'
import RelPosition from '../views/Account/ReleasePosition.vue'
import Position from '../views/Position/PositionIndex.vue'
import Account from '../views/Account/index.vue'
import Login from '../views/Login/LoginIndex.vue'
import Recode from '../views/Account/Recode.vue'
import News from '../views/Account/news.vue'
const routes = [
  // {
  //   path: '/search',
  //   name: '发现',
  //   component: FinderIndex,
  //   meta: {
  //     isMenuItem: true
  //   }
  // },
  // {
  //   path: '/campus',
  //   name: '校园',
  //   component: Campus,
  //   meta: {
  //     isMenuItem: true
  //   }
  // },
  // {
  //   path: '/company',
  //   name: '公司',
  //   component: Company,
  //   meta: {
  //     isMenuItem: true
  //   }
  // },
  {
    path: '/',
    name: '首页',
    component: HomeIndex,
    redirect: '/home'|| '/rhome',
    meta: {
      isMenuItem: false,
      owner: 'Jobseeker'
    }
  },
  {
    path: '/home',
    name : '首页',
    component: Home,
    meta: {
      isMenuItem: true,
      owner: 'Jobseeker'
    }
  },
  {
    path: '/position',
    name: '职位',
    component: Position,
    meta: {
      isMenuItem: true,
      owner: 'Jobseeker'
    }
  },
  {
    path: '/account',
    name: '个人中心',
    redirect: '/recode',
    component: Account,
    meta: {
      isMenuItem: true,
      owner: 'Jobseeker'
    }
  },
  {
    path: '/login',
    name: '登录/注册',
    component: Login,
    meta: {
      isMenuItem: true,
      owner: 'Jobseeker'
    }
  },
  {
    path: '/notfound',
    name: '404页面',
    component: notFound,
    meta: {
      isMenuItem: false,
      owner: 'Jobseeker'
    }
  },
  {
    path: '/postiondetails',
    name: '职位详情',
    component: PositionDetail,
    meta: {
      isMenuItem: false,
      owner: 'Jobseeker'
    }
  },
  {
    path: '/editonlineresume',
    name: '编辑在线简历',
    component: OnlineResume,
    meta: {
      isMenuItem: false,
      owner: 'Jobseeker'
    }
  },
  {
    path: '/onlineresume',
    name: '我的简历',
    component: myOnlineResume,
    meta: {
      isMenuItem: true,
      owner: 'Jobseeker'
    }
  },
  {
    path: '/recode',
    name: '投递记录',
    component: Recode,
    meta: {
      isMenuItem: false,
      owner: 'Jobseeker'
    }
  },
  {
    path: '/news',
    name: '消息',
    component: News,
    meta: {
      isMenuItem: true,
      owner: 'Jobseeker'
    }
  },
  {
    path: '/rhome',
    name: '我的职位',
    component: Rhome,
    meta: {
      isMenuItem: true,
      owner: 'Recruiter'
    }
  },
  {
    path: '/releaseposition',
    name: '发布职位',
    component: RelPosition,
    meta: {
      isMenuItem: false,
      owner: 'Recruiter'
    }
  }
]

export default routes