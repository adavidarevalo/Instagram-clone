import { useState } from 'react'
import { useMutation } from '@apollo/client'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { UPDATE_COMMENTARY } from '../../../../../graphQL/gql/commentary'
import { EmojiPicker } from '../../../../emoji_picker'
import ActionPost from './action_post'

export default function NewComentary ({ postId }: {postId: string}) {
  const [createCommentary] = useMutation(UPDATE_COMMENTARY)
  const [commentary, setCommentary] = useState<string>('')

  const handleCommentary = () => {
    createCommentary({
      variables: { postId, commentary }
    })
  }

  return (
    <div className="border-inherit border-t-2">
    <ActionPost postId={postId}/>
        <div
        className='flex items-center'
    >
      <EmojiPicker/>
      <TextField
      sx={{ ml: 1, flex: 1 }}
          id="standard-multiline-static"
          label="Comentary"
          multiline
          variant="standard"
          value={commentary}
          onChange={(e) => setCommentary(e.target.value)}
        />
      <Button variant="text" onClick={handleCommentary}>Publicar</Button>
    </div>
    </div>
  )
}
