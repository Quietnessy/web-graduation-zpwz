// 求职者相关API
import {get, post, del, put } from './http.js'
// const BASE_URL = 'http://czp-test.intra.xiaojukeji.com/mis/ams/v1/admin'

export const mytestAPi = (p) => get('api/mis/ams/v1/admin/app/cities', p)
