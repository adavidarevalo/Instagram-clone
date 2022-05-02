import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'

interface IProps {
  title: string;
  handleClose: () => void
}

export default function Header ({ title, handleClose }: IProps) {
  return (
        <div className="flex items-center justify-center w-full font-semibold p-2 border-b-1 border border-inherit rounded-md">
            {title}
            <IconButton className="left-1/3" aria-label="Close" onClick={handleClose}>
                <CloseIcon/>
            </IconButton>
        </div>
  )
}
