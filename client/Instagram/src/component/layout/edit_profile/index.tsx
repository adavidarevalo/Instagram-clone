import { ReactChildren, ReactChild } from 'react'
import { NavLink } from 'react-router-dom'

import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@mui/material/ListItem'
import Avatar from '@mui/material/Avatar'
import useUserData from '../../../hook/use_user_data'

interface IProps {
    children: ReactChild | ReactChildren;
  }

export default function EditProfileLayout ({ children }: IProps) {
  const { user: { userName, name, email, avatar } } = useUserData()

  return (
        <div className="bg-white grid grid-cols-4 grid-flow-col gap-4 gap-6 w-full max-w-4xl">
            <div className="border-r border-inherit">
                <div className="p-4">
                    <Avatar alt={userName} src={avatar} sx={{ width: 56, height: 56 }} />
                    <h4 className="mt-4 font-medium">{name}</h4>
                    <p className="text-sm text-gray-500">{email}</p>
                </div>
                <Divider />
                <List>
                    <ListItem>
                        <NavLink to="/profile/edit">Editar Perfil</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/profile/password">Cambiar contraseña</NavLink>
                    </ListItem>
                </List>
            </div>
            <div className='col-start-2 col-end-5'>
                {children}
            </div>
        </div>
  )
}
