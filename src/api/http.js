import axios from 'axios'
import router from '@/router'

 axios.defaults.baseURL = 'http://api.themoviedb.org/3/'

 const apiKey = '239aca043443595d58d1182a8615d413'

const handleRequestError = error => {
  switch (error.response.status) {
    case 401:
      router.push({ name: '401' })
      break
    case 403:
      router.push({ name: '403' })
      break
    case 500:
      router.push({ name: '500' })
      break
    case 503:
      router.push({ name: '503' })
      break
    default:
      throw error
  }
}

const get = (resource, config) => {
  const headers = config ? config.headers : {}
  const url = `${resource}?api_key=${apiKey}`
  return axios.get(url, { ...config, headers }).catch(error => {
    handleRequestError(error)
  })
}

const post = (url, data, config) => {
  return axios.post(url, data, { ...config }).catch(error => {
    if (error.response.status !== 401) {
      throw error
    }
    handleRequestError(error)
  })
}

const postWithoutCustomHeader = (url, data, config) => {
  return axios.post(url, data, config).catch(error => {
    handleRequestError(error, true)
  })
}

const update = (url, data, config) => {
  return axios.put(url, data, { ...config }).catch(error => {
    if (error.response.status !== 401) {
      throw error
    }
    handleRequestError(error)
  })
}

const remove = (url, data) => {
  return axios.delete(url, data).catch(error => {
    if (error.response.status !== 401) {
      throw error
    }
    handleRequestError(error)
  })
}

export default {
  get,
  post,
  postWithoutCustomHeader,
  update,
  remove
}
