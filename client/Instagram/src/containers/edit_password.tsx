import { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import useUserData from '../hook/use_user_data'
import InputEdit from '../component/edit_profile/input'
import { IUserPassword } from '../types/user'

export default function EditPassword () {
  const {
    user: { userName, name, avatar },
    changePasword
  } = useUserData()

  const [value, setValue] = useState<IUserPassword>({
    lastPassowrd: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = () => {
    changePasword(value)
  }

  const { lastPassowrd, password, confirmPassword } = value

  return (
      <>
        <div className="grid grid-cols-4 gap-2 grid-rows-4 grid-flow-col p-5">
            <Avatar className="m-auto" alt={name} src={avatar} />
            <h3 className="row-start-1 col-start-2 col-end-5 text-xl font-normal">{userName}</h3>
            <InputEdit title="Contraseña anterior" row="2" value={lastPassowrd} name="lastPassowrd" handleCahnge={handleChange}/>
            <InputEdit title="Contraseña nueva" row="3" value={password} name="password" handleCahnge={handleChange}/>
            <InputEdit title="Confirmar contraseña nueva" row="4" value={confirmPassword} name="confirmPassword" handleCahnge={handleChange}/>
        </div>
        <Button className="" variant="contained" onClick={handleSubmit}>
                Cambiar contraseña
            </Button>
            <Button className="" variant="text">
                ¿Olvidaste tu contraseña?
            </Button>
        </>
  )
}
