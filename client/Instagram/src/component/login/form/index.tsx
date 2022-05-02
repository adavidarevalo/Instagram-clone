import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import useForm from '../../../hook/use_form'
import useSubmit from '../../../hook/use_submit'
import { loginFormKeys } from './../../../utils/auth_pages'
import { LOGIN_USER } from '../../../graphQL/gql/user'
import instagramLogo from '../../../assets/images/instagram_logo.svg'
import loginSchema from '../../../schemas/login'
import ChangePageAuth from '../../../component/shared/change_page_auth'
import Button from '../../shared/button_custom'
import { decodeToken, setToken } from './../../../utils/token'
import { authContext } from './../../../context/auth'

import './form.scss'

export default function FormLogin () {
  const [isVisisble, setIsVisisble] = useState<boolean>(false)
  const { setUser } = useContext(authContext)
  const { formValue, handleChange } = useForm(loginFormKeys)

  const [getLogin, { data }] = useLazyQuery<any>(LOGIN_USER, {
    variables: formValue
  })

  const { error, isLoading, handleSubmit } = useSubmit(formValue, loginSchema, getLogin)

  useEffect(() => {
    if (data?.loginUser) {
      const { token } = data.loginUser
      setToken(token)
      setUser(decodeToken(token))
    }
  }, [data])

  return (
        <div>
            <Card variant="outlined" className="w-full max-w-sm m-auto mb-4 shadow">
                <CardContent>
                    <img className="w-3/5 m-auto mb-10" src={instagramLogo} alt="Inctagram Logo" />
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                        <Input
                            className="mb-6"
                            id="standard-adornment-email"
                            type="email"
                            value={formValue.email}
                            name="email"
                            onChange={handleChange}
                            placeholder="Email"
                        />
                        <Input
                            className="mb-6"
                            id="standard-adornment-password"
                            type={isVisisble ? 'text' : 'password'}
                            value={formValue.password}
                            name="password"
                            onChange={handleChange}
                            placeholder="Password"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setIsVisisble((prev) => !prev)}
                                        onMouseDown={e => e.preventDefault()}
                                    >
                                        {isVisisble ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <Button
                        onClick={handleSubmit}
                        isLoading={isLoading}
                        content="Iniciar Secion"
                        />
                    </FormControl>
                </CardContent>
                {error && <p className="text-center text-rose-500 text-sm">{error}</p>}
                <CardActions>
                    <Link to="/" className="m-auto mb-4 text-blue-900 font-semibold text-xs">
                        ¿Olvidaste tu contraseña?
                    </Link>
                </CardActions>
            </Card>
            <ChangePageAuth
            content="¿No tiene una cuenta?"
            link="/sign-up"
            linkContent="Registrate"
            />
        </div>
  )
}
