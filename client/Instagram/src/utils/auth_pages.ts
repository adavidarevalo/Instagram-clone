import React from 'react'
import _ from 'lodash'

export const inputsSingUpForm = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email'
  },
  {
    name: 'name',
    type: 'text',
    placeholder: 'Nombre Completo'
  },
  {
    name: 'userName',
    type: 'text',
    placeholder: 'Nombre de usuario'
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password'
  }
]

export const loginFormKeys = ['email', 'password']
export const singUpFormKeys = ['name', 'password', 'userName', 'name']

export const showError = (e: any, setError: React.Dispatch<React.SetStateAction<string | null>>) => {
  const getError = _.get(e, 'error.details[0].message')
  setError(getError)
  const cleanTimeOut = setTimeout(() => {
    setError(null)
  }, 10000)
  clearTimeout(cleanTimeOut)
}
