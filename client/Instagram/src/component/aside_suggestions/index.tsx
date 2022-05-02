import { useContext } from 'react'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import { userDataContext } from '../../context/userData'
import { GET_USER_SUGGESTIONS } from '../../graphQL/gql/user'
import Profile from './profile'
import useNotifier from '../../hook/use_notifier'

export default function AsideSuggestions () {
  const { user } = useContext(userDataContext)
  const { setNotifier } = useNotifier()

  const { data, loading, error } = useQuery(GET_USER_SUGGESTIONS)

  if (loading === true || !user) return <></>

  if (error) {
    return setNotifier(error.message, 'error')
  }

  return (
        <>
            <Profile imageSize={50} user={user}/>
            <div className="mb-3 flex justify-between">
                <h2 className="text-xs text-gray-500 font-bold">Sugerencias para ti</h2>
                <Link to="/" className="text-xs font-medium">
                    Ver Todo
                </Link>
            </div>
            {
                data.getSuggestions.map((user: any) => <Profile key={user.userName} imageSize={40} user={user}/>)
            }
        </>
  )
}
