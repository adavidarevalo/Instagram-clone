import { useContext } from 'react'
import { authContext } from './../context/auth'

const useAuth = () => {
  const auth = useContext(authContext)
  return auth
}

export default useAuth
