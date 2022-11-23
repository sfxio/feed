/* eslint-disable */

const API_BASE_URL = 'https://apiv2.shopflex.io'

export function fetcher(config) {
  let { url, method, params } = config
  method = method || 'get'
  url = `${API_BASE_URL}${url}`

  const init = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  if (method === 'get' && params) {
    const query = []

    for (const key in params) {
      const value = params[key]
      if (value != null && value != '') {
        query.push(`${key}=${value}`)
      }
    }

    url = `${url}?${query.join('&')}`
  }

  if (method === 'post' && params) {
    init.body = JSON.stringify(params)
  }

  return fetch(url, init)
    .then((res) => res.json())
    .then((res) => {
      if (!res) return Promise.reject(new Error('invalid request'))
      const { code, data, message } = res
      if (code === 200) {
        return Promise.resolve(data)
      } else {
        return Promise.reject(new Error(message))
      }
    })
}

export function submit(params) {
  const { uid, ...rest } = params
  const data = {
    myCode: 'lwamygynci',
    ...rest,
  }
  return fetcher({
    url: '/config/syn/contacts',
    method: 'post',
    params: data,
  })
}
