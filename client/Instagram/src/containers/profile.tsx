import { useParams } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'

import { UserInformation } from '../component/profile/user_data'
import { GET_USER } from '../graphQL/gql/user'
import { useEffect } from 'react'
import useUserData from '../hook/use_user_data'
import useAuth from '../hook/use_auth'

export default function Profile () {
  const { userName } = useParams()
  const { auth } = useAuth()
  const { user } = useUserData()
  const [getUser, { loading, error, data }] = useLazyQuery(GET_USER)

  useEffect(() => {
    if (auth.userName !== userName) {
      // console.log('Hello World.')
      getUser({
        variables: { userName }
      })
    }
  }, [])

  if (error?.message) {
    return <p>{error.message}</p>
  }
  if (loading || !user) {
    return <p>Loading...</p>
  }
  return (
    <div className="w-full max-w-4xl pt-4">
      <UserInformation userData={ auth.userName === userName ? user : data.getUser[0] } auth={auth}/>
    </div>
  )
}
