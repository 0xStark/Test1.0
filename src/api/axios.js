import axios from 'axios'
import qs from 'qs'
import { ToastProgrammatic as Toast } from 'buefy'
import { serialize } from './util'
import errorCode from './errorCode'

const messageDuration = 5 * 1000

axios.defaults.timeout = 30000
// 返回其他状态吗
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500 // 默认的
}
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true

// HTTPrequest拦截
axios.interceptors.request.use((config) => {

  // headers中配置serialize为true开启序列化
  if (config.method === 'post' && config.headers.serialize) {
    config.data = serialize(config.data)
    delete config.data.serialize
  }

  if (config.method === 'get') {
    config.paramsSerializer = function (params) {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    }
  }

  return config
}, (error) => {
  return Promise.reject(error)
})

// HTTPresponse拦截
axios.interceptors.response.use((res) => {
  const status = Number(res.status) || 200
  const message = res.data.msg || errorCode[status] || errorCode.defaults
  if (status === 401) {
    Toast.open({
      message,
      type: 'is-danger',
      duration: messageDuration
    })
    return
  }

  if (status !== 200 || res.data.code === 1) {
    Toast.open({
      message,
      type: 'is-danger',
      duration: messageDuration
    })
    return Promise.reject(new Error(message))
  }

  return res
}, (error) => {
  return Promise.reject(new Error(error))
})

export default axios
