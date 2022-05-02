import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined'
import { userDataContext } from '../../../../../../context/userData'
import { authContext } from '../../../../../../context/auth'

export function AccountMenu () {
  const { user: { avatar, name } } = useContext(userDataContext)
  const { logout, auth } = useContext(authContext)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const options = [
    {
      name: 'Perfil',
      icon: <AccountCircleOutlinedIcon fontSize="small" />,
      link: `/${auth.userName}`
    },
    {
      name: 'Guardado',
      icon: <BookmarkBorderOutlinedIcon fontSize="small" />,
      link: '/'
    },
    {
      name: 'Configuracion',
      icon: <SettingsOutlinedIcon fontSize="small" />,
      link: '/'
    },
    {
      name: 'Cambiar de cuenta',
      icon: <ChangeCircleOutlinedIcon fontSize="small" />,
      link: '/'
    }
  ]

  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar alt={name} src={avatar} sx={{ width: 24, height: 24 }}>M</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
                     {options.map((opt) => (
                    <Link to={opt.link} key={opt.name}>
                        <MenuItem>
                            <ListItemIcon>{opt.icon}</ListItemIcon>
                            <ListItemText>{opt.name}</ListItemText>
                        </MenuItem>
                    </Link>
                     ))}
        <Divider />
                 <MenuItem>
                     <ListItemText onClick={logout}>Salir</ListItemText>
                 </MenuItem>
      </Menu>
    </>
  )
}
