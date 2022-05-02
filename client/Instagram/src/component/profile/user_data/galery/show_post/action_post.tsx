import { useEffect, useState } from 'react'
import _ from 'lodash'
import { useMutation, useQuery } from '@apollo/client'
import IconButton from '@mui/material/IconButton'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { IS_LIKE, LIKE_POST } from '../../../../../graphQL/gql/like'

export default function ActionPost ({ postId }: {postId: string}) {
  const { data } = useQuery(IS_LIKE, {
    variables: { postId }
  })
  const [getFavoritePost, { data: dataFavorite }] = useMutation(LIKE_POST, {
    variables: { postId }
  })

  const [actions, setActions] = useState<{[e: string]: boolean}>({
    mark: false,
    favorite: false
  })

  const hadleActions = () => {
    const favoriteResult = _.get(data, 'isLike')
    console.log('favoriteResult ', favoriteResult)

    setActions(() => ({
      favorite: favoriteResult
    }))
  }

  const handleFavorite = () => {
    const dataFavoriteResult = _.get(dataFavorite, 'like')
    console.log('dataFavoriteResult ', dataFavoriteResult)

    setActions(() => ({
      favorite: dataFavoriteResult
    }))
  }

  useEffect(() => {
    if (data) {
      console.log('Yes bay')
      hadleActions()
    }
  }, [data])

  useEffect(() => {
    if (dataFavorite) {
      handleFavorite()
    }
  }, [dataFavorite])

  const { mark, favorite } = actions

  return (
    <div className='flex justify-between'>
      <div>
        <IconButton aria-label="Favorite" onClick={() => getFavoritePost()}>
          {
              favorite
                ? <FavoriteOutlinedIcon/>
                : <FavoriteBorderIcon />
          }
        </IconButton>
        <IconButton aria-label="Chart">
          <ChatBubbleOutlineIcon />
        </IconButton>
      </div>
      <IconButton aria-label="Mark">
          {
              mark
                ? <BookmarkIcon/>
                : <BookmarkBorderOutlinedIcon />
          }
      </IconButton>
    </div>
  )
}
