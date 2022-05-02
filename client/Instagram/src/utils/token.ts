import jwtDecode from 'jwt-decode'
export const TOKEN = 'TOKEN'

export const getToken = () => {
  return localStorage.getItem(TOKEN)
}

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN, token)
}

export const deleteToken = () => {
  localStorage.removeItem(TOKEN)
}

export const decodeToken = (token: string) => {
  return jwtDecode(token)
}
