import { useContext } from 'react'
import { userDataContext } from '../context/userData'

const useUserData = () => {
  const userData = useContext(userDataContext)
  return userData
}

export default useUserData
