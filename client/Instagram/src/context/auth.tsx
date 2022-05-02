import { createContext, ReactChild, ReactChildren, useEffect, useMemo, useState } from 'react'
import { deleteToken, getToken, decodeToken } from '../utils/token'

interface IProps {
    children: ReactChild | ReactChildren;
}

export const authContext = createContext<any>(null)

export default function AuthContext ({ children }: IProps) {
  const [auth, setAuth] = useState<any>(false)

  const logout = () => {
    deleteToken()
    setAuth(false)
  }

  const setUser = (user: any) => {
    setAuth(user)
  }

  useEffect(() => {
    const token = getToken()
    if (token) {
      setUser(decodeToken(token))
    }
  }, [])

  const authFn = useMemo(() => {
    return {
      logout,
      setUser,
      setAuth,
      auth
    }
  }, [auth])

  return <authContext.Provider value={{ ...authFn }}>{children}</authContext.Provider>
}
