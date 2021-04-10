// 资产管理
import AssetIndex from '../views/Assets/index.vue'
// import Assets from '../views/Assets/AssetList.vue'

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
    // redirect: '/asset',
    // children: [
    //   {
    //     path: '/asset',
    //     name: '首页       ',
    //     component: AssetIndex,
    //     meta: {
    //       isMenuItem: true
    //     }
    //   },
    //   {
    //     path: '/assets-info',
    //     name: '资产列表',
    //     component: Assets,
    //     meta: {
    //       isMenuItem: true
    //     }
    //   }
    // ]
  },
  {
    path: '/content',
    name: '职位',
    component: ContentIndex,
    // children: [
    //   {
    //     path: '/content-info',
    //     name: '内容列表',
    //     component: Content,
    //     meta: {
    //       isMenuItem: true
    //     }
    //   }
    // ]
  },
  {
    path: '/search',
    name: '发现',
    component: FinderIndex
  },
  {
    path: '/campus',
    name: '校园',
    component: Campus
  },
  {
    path: '/company',
    name: '公司',
    component: Company
  },
  {
    path: '/account',
    name: '个人中心',
    component: Account
  },
  {
    path: '/login',
    name: '登录/注册',
    component: Login
  }
]

export default routes