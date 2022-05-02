import { useQuery } from '@apollo/client'
import BasicModal from '../../../modal/basic'
import FollowersModalContent from './modal_content/followers'
import { useParams } from 'react-router-dom'

import { GET_FOLLOWER_LIST, GET_FOLLOW_ME_LIST } from '../../../../graphQL/gql/follow'

export default function Params ({ dataPost }: {dataPost: any}) {
  const { userName } = useParams()

  const { loading, data } = useQuery(GET_FOLLOWER_LIST, {
    variables: { userName },
    pollInterval: 3000
  })

  const { loading: loadingFollowMe, data: followMe } = useQuery(GET_FOLLOW_ME_LIST, {
    variables: { userName },
    pollInterval: 3000
  })

  const modal = [
    {
      loading: loadingFollowMe,
      data: followMe?.getFollow,
      title: 'Seguidores'
    },
    {
      loading,
      data: data?.getFollowersList,
      title: 'Seguidos'
    }
  ]

  return (
    <>
      <div className="gap-4 grid-cols-3 mb-1 hidden md:grid sm:my-3">
        <p className="text-sm"><span className="font-semibold">{dataPost.length}</span> publicación</p>
        {
          modal.map(({ loading, data, title }: any) => (
            <BasicModal
            key={title}
              trigger={<>{loading ? 'loading...' : <p className="text-sm cursor-pointer"><span className="font-semibold">{data.length}</span> {title.toLowerCase()}</p>}</>}
              content={(handleClose) => <FollowersModalContent title={title} data={data} handleClose={handleClose}/>}
            />
          ))
        }
      </div>
      <p className="font-semibold">David Arevalo</p>
    </>
  )
}
