import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import { Link } from 'react-router-dom'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import instagramLogo from '../../../assets/images/instagram_logo.svg'
import loginSchema from '../../../schemas/login'
import _ from 'lodash'
import './form.scss'

interface IForm {
  email: string
  password: string
}

export default function FormLogin () {
  const [isVisisble, setIsVisisble] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [formValues, setFormValues] = useState<IForm>({
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleSubmit = async () => {
    console.log(formValues)

    try {
      const validate = await loginSchema.validate(formValues)
      if (validate?.error) {
        const getError = _.get(validate, 'error.details[0].message')
        setError(getError)
        const cleanTimeOut = setTimeout(() => {
          setError(null)
        }, 10000)
        clearTimeout(cleanTimeOut)
        return
      }
    } catch (error) {
      // Enviar a la api
      console.log(error)
    }
  }

  return (
    <div>
    <Card variant="outlined" className="w-full max-w-sm m-auto mb-4 shadow">
      <CardContent>
        <img
        className="w-3/5 m-auto mb-10"
        src={instagramLogo}
        alt="Inctagram Logo"/>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
        <Input
        className="mb-6"
            id="standard-adornment-email"
            type='email'
            value={formValues.email}
            name="email"
            onChange={handleChange}
            placeholder="Email"
          />
          <Input
          className="mb-6"
            id="standard-adornment-password"
            type={isVisisble ? 'text' : 'password'}
            value={formValues.password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setIsVisisble(prev => !prev)}
                  onMouseDown={handleMouseDownPassword}
                >
                  {isVisisble ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Button variant="contained" onClick={handleSubmit}>Iniciar Secion</Button>
        </FormControl>
      </CardContent>
      {error && <p className="text-center text-rose-500 text-sm">{error}</p>}
      <CardActions>
        <Link to="/" className="m-auto mb-4 text-blue-900 font-semibold text-xs">¿Olvidaste tu contraseña?</Link>
      </CardActions>
    </Card>
    <Card variant="outlined" className="w-full max-w-sm m-auto shadow">
    <CardContent className="text-center">
      <span className="text-sm">No tiene una cuenta? <Link to="/sign-up" className="m-auto mb-4 font-semibold text-blue-400">Registrate</Link></span>
    </CardContent>
    </Card>
    </div>
  )
}
