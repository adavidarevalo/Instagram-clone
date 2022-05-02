import { useQuery } from '@apollo/client'
import { GET_COMMENTARIES } from '../../../../../../graphQL/gql/commentary'
import Commentary from './commentary'

export default function Commentaries ({ postId }: {postId: string}) {
  const { loading, data } = useQuery(GET_COMMENTARIES, {
    variables: { postId }
  })
  if (loading) return <p>Loading...</p>
  const { getCommetaries } = data

  return (
        <div className="h-4/6">
          {getCommetaries.length === 0 && (<p>Todavia no hay comentarios. 🥲</p>)}
          {
            getCommetaries.map((commentary: any) => (
              <Commentary key={commentary._id} commentary={commentary}/>
            ))
          }
        </div>
  )
}
