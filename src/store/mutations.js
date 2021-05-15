// 设置搜索关键字
export const setCursearchKeys = (state, curVal) => {
  state.searchKeys = curVal
}
// 设置登录状态
export const setLoginstatus = (state, curVal) => {
  state.isLogin = curVal
}

// 设置用户头像url
export const setUserImage = (state, curVal) => {
  state.userImageUrl = curVal
}

// 设置用户名
export const setUserName = (state, curVal) => {
  console.log('=调用了Vuex')
  state.userName = curVal
}

// 设置是否隐藏导航菜单（当是登录界面的时候就隐藏菜单栏）
export const setCurrouter = (state, curVal) => {
  state.isHideMenu = curVal
}

// 设置当前用户的角色（求职者、招聘者）
export const setCurRole = (state, curVal) => {
  state.curRole = curVal
}

 