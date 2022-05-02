import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'

import IconButton from '@mui/material/IconButton'
import SettingsIcon from '@mui/icons-material/Settings'
import Avatar from '@mui/material/Avatar'

import Button from './../../shared/button_custom'
import Params from './params'
import BasicModal from './../../modal/basic'
import ModifyImageForm from './modify_image_form'
import { GET_FOLLOW, MODIFY_FOLLOW } from '../../../graphQL/gql/follow'
import { GET_POST } from '../../../graphQL/gql/post'
import GaleryProfile from './galery'
import { IUser } from '../../../types/user'
import { ITokenData } from '../../../types/token_data'
import Loading from '../../loading'

interface IProps {
  userData: IUser,
  auth: ITokenData
}

export function UserInformation ({ userData, auth }: IProps) {
  const [isFollow, setIsFollow] = useState<boolean | undefined>(undefined)
  const { userName, avatar } = userData

  const navigate = useNavigate()

  const [modifyFollow, { data: dataFollow, loading }] = useMutation<any>(MODIFY_FOLLOW, {
    variables: { userName }
  })
  const { data } = useQuery(GET_FOLLOW, {
    variables: { userName }
  })

  if (isFollow === undefined && data?.follow) {
    setIsFollow(data.follow)
  }

  useEffect(() => {
    if (dataFollow?.modifeFollowUser === !isFollow) {
      setIsFollow(dataFollow.modifeFollowUser)
    }
  }, [dataFollow])

  const handleClick = () => {
    if (auth.userName === userName) {
      navigate('/profile/edit')
      return
    }
    modifyFollow()
  }

  const avatarComponent = () => <Avatar alt={userName} sx={{ width: 100, height: 100 }} src={avatar} />

  const buttonContent = () => {
    if (auth.userName === userName) return 'Editar Perfil'
    if (isFollow) return 'Dejar de seguir'
    return 'Seguir'
  }

  // get Post data
  const { loading: loagindPost, error, data: dataPost } = useQuery(GET_POST, {
    variables: { userName: userData.userName },
    pollInterval: 2000
  })

  if (dataPost === undefined && loagindPost) return <Loading styles={'w-full h-96'}/>

  if (error) return <p>Error...</p>

  return (
    <div className="min-w-full">
      <section className="flex sm:justify-between w-full sm:w-3/5 max-w-lg">
        {
          auth.userName === userName
            ? <BasicModal trigger={avatarComponent()} content={(handleClose) => <ModifyImageForm handleClose={handleClose}/>} />
            : avatarComponent()
        }
        <div className="ml-5">
          <div className="flex items-start">
            <h3 className="text-2xl mr-2">{userName}</h3>
            <div className="hidden md:block mx-3">
              <Button
                onClick={handleClick}
                isLoading={loading}
                content={buttonContent()}
              />
            </div>
            <IconButton aria-label="delete" size="small">
              <SettingsIcon fontSize="inherit" />
            </IconButton>
          </div>
          <div className="block md:hidden my-3">
            <Button
              onClick={handleClick}
              isLoading={loading}
              content={buttonContent()}
            />
          </div>
          <Params dataPost={dataPost.getPosts}/>
        </div>
      </section>
      <GaleryProfile dataPost={dataPost}/>
    </div>
  )
}
