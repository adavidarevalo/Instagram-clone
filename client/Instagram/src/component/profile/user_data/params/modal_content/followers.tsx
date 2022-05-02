import { Button } from '@material-ui/core'
import List from '@mui/material/List'

import Header from './components/header'
import UserComponent from './components/user'

export default function FollowersModalContent ({ title, data, handleClose }: any) {
  return (
        <div>
            <Header title={title} handleClose={handleClose}/>
            <List>
            { data.length > 0
              ? data.map((user: any) => {
                const { userName, _id } = user.follow
                return (
                        <UserComponent key={_id} data={user.follow} title={<p>{userName} · <Button variant="text">Seguir</Button></p>} button="Eliminar"/>
                )
              })
              : <p className="text-center">No hay usuarios {title.toLowerCase()}</p>
            }
            </List>
        </div>
  )
}
