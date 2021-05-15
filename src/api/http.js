
// import store from '@/store/index'



// function getCookie () {
//   const cookieArr = document.cookie.split('; ')
//   const tempParams = {}
//   cookieArr.forEach(element => {
//     element = element.split('=')
//     tempParams[element[0]] = element[1]
//   })
//   return tempParams
// }
import axios from 'axios'
// 设置默认的请求超时时间
axios.defaults.timeout = 10000
// 默认携带cookie
axios.defaults.withCredentials = true
// 设置请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'


// 请求拦截器
axios.interceptors.request.use(
  config => {
    config.headers.originUrl = window.location.href
    return config
  }
)
// 响应拦截器
axios.interceptors.response.use(
  // 请求成功
  res => {
    if (res.status === 200) {
      // 如果尚未登录，则跳转到登录页面
      if (res.data.code === 302) {
        window.location.href = res.data.data
        return res
      }
      return Promise.resolve(res)
    } else {
      return Promise.reject(res)
    }
  },
  error => {
    return Promise.reject(error.response)
  }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get (url, params = {}, headers = {}) {
  return new Promise((resolve,reject) => {
    axios.get(url, {
      params,
      headers
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * post json方法，对应post请求，内容管理用
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post (url, params, headers) {
  return new Promise((resolve,reject) => {
    axios.post(url, params, { headers })
    .then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * put json方法，内容管理用
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function put(url, params, headers) {
  return new Promise((resolve, reject) => {
    axios.put(url, params, { headers })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * delete方法，内容管理用
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function del (url, params, headers) {
  return new Promise((resolve, reject) => {
    axios.delete(url, { data: params, headers }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}