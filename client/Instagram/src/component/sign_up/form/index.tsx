import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import { Link } from 'react-router-dom'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import instagramLogo from '../../../assets/images/instagram_logo.svg'
import singUpSchema from '../../../schemas/sing_up'
import _ from 'lodash'
import './form.scss'

interface IForm {
  email: string
  password: string,
  userName: string,
  name: string
}

export default function SingUpForm () {
  const [error, setError] = useState<string | null>(null)
  const [formValues, setFormValues] = useState<IForm>({
    email: '',
    password: '',
    userName: '',
    name: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    console.log(formValues)

    try {
      const validate = await singUpSchema.validate(formValues)
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
            id="standard-adornment-name"
            type='text'
            value={formValues.name}
            name="name"
            onChange={handleChange}
            placeholder="Nombre Completo"
          />
          <Input
            className="mb-6"
            id="standard-adornment-userName"
            type='text'
            value={formValues.userName}
            name="name"
            onChange={handleChange}
            placeholder="Nombre de usuario"
          />
          <Input
            className="mb-6"
            id="standard-adornment-password"
            type='password'
            value={formValues.password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <Button variant="contained" onClick={handleSubmit}>Registrarte</Button>
        </FormControl>
      </CardContent>
      {error && <p className="text-center text-rose-500 text-sm">{error}</p>}
      <CardActions>
          <span className="text-xs text-center text-zinc-500">Al registrarte, aceptas nuestras <Link to="/" className="m-auto mb-4 font-semibold text-zinc-600">Condiciones, la Política de datos y la Política de cookies.</Link></span>
      </CardActions>
    </Card>
    <Card variant="outlined" className="w-full max-w-sm m-auto shadow">
    <CardContent className="text-center">
      <span className="text-sm">¿Tienes una cuenta? <Link to="/login" className="m-auto mb-4 font-semibold text-blue-400">Inicia sesión</Link></span>
    </CardContent>
    </Card>
    </div>
  )
}
