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
 