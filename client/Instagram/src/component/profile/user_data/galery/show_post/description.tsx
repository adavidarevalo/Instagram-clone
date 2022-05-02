import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { ReadMore } from '../../../../shared/read-more'

interface IProps {
  userName: string,
  avatar: string,
  description: string,
  handleClose: () => void
}

export default function Description ({ userName, avatar, description, handleClose }: IProps) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Avatar alt={userName} src={avatar} />
          <h3 className="ml-3">{userName}</h3>
        </div>
        <IconButton aria-label="delete" size="small">
          <CloseIcon fontSize="inherit" onClick={handleClose} />
        </IconButton>
      </div>
      <p className="text-xs mt-3 pb-3 border-inherit border-b-2">
      <ReadMore text={description}/>
      </p>
    </>
  )
}
