// 封装和token相关的方法

const TOKENKEY = 'token_key'
function getToken() {
  return localStorage.getItem(TOKENKEY) || ''
}
function setToken(token) {
  localStorage.setItem(TOKENKEY, token)
}
function removeToken() {
  localStorage.removeItem(TOKENKEY)
}

export { getToken, setToken, removeToken }

