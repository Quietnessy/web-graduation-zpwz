// actions.js ：暴露给用户使用，借此触发mutations中的方法，保存数据（可执行异步操作）
// 这里有2种方式：
// 方法一：
// export const saveDbSource = (context, payload) => {
//   context.commit('saveDbSource', payload);
// };

// 方法二：
// export const saveDbSource = ({ commit }, payload) => {
//  commit('saveDbSource', payload);
// };

// 设置搜索关键字
export const setCursearchKeys = ({ commit }, curVal) => {
  commit('setCursearchKeys', curVal)
}
// 设置登录状态
export const setLoginstatus = ({ commit }, curVal) => {
  commit('setLoginstatus', curVal)
}
// 设置用户头像url
export const setUserImage = ({ commit }, curVal) => {
  commit('setUserImage', curVal)
}
// 设置用户名
export const setUserName = ({ commit }, curVal) => {
  commit('setUserName', curVal)
}
// 设置是否显示菜单
export const setCurrouter = ({ commit }, curVal) => {
  commit('setCurrouter', curVal)
}
// 设置当前角色
export const setCurRole = ({ commit }, curVal) => {
  commit('setCurRole', curVal)
}