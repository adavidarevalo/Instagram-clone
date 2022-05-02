import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

interface Iprops {
    trigger: JSX.Element,
    width?: number,
    content: (handleClose: () => void) => JSX.Element
  }

export default function BasicModal ({ trigger, width, content }: Iprops) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: width || 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
    outline: 'none'
  }

  return (
    <div>
      <div onClick={handleOpen}>{trigger}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {content(handleClose)}
        </Box>
      </Modal>
    </div>
  )
}
