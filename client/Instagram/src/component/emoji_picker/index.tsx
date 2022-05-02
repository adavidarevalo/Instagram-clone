
import Picker, { IEmojiData } from 'emoji-picker-react'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import IconButton from '@mui/material/IconButton'
import { BasicPopup } from '../popup/basic'

export function EmojiPicker () {
  const onEmojiClick = (event: React.MouseEvent<Element, MouseEvent>, data: IEmojiData) => {
    console.log(data)
  }

  return (
    <div>
      <BasicPopup
      trigger={
        <IconButton aria-label="Emoji">
        <SentimentSatisfiedAltIcon />
      </IconButton>
      }
      content={<Picker onEmojiClick={onEmojiClick} />}
      />
    </div>
  )
}
