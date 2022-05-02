import { useEffect, useContext } from 'react'
import { useMutation } from '@apollo/client'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'

import useSubmit from '../../../hook/use_submit'
import useForm from './../../../hook/use_form'
import { singUpFormKeys } from './../../../utils/auth_pages'
import { inputsSingUpForm } from '../../../utils/auth_pages'
import { ISignUpInput } from './../../../types/sign_up'
import singUpSchema from '../../../schemas/sing_up'
import Button from '../../shared/button_custom'
import instagramLogo from '../../../assets/images/instagram_logo.svg'
import { CREATE_USER } from '../../../graphQL/gql/user'
import ChangePageAuth from '../../../component/shared/change_page_auth'
import PoliciesInfo from './policies_info'
import { authContext } from '../../../context/auth'
import { setToken, decodeToken } from '../../../utils/token'

import './form.scss'

const SingUpForm = () => {
  const { formValue, handleChange } = useForm(singUpFormKeys)
  const { setUser } = useContext(authContext)

  const [createUser, { data }] = useMutation<any>(CREATE_USER, {
    variables: formValue
  })

  useEffect(() => {
    if (data?.createUser) {
      const { token } = data.createUser
      setToken(token)
      setUser(decodeToken(token))
    }
  }, [data])

  const { error, isLoading, handleSubmit } = useSubmit(formValue, singUpSchema, createUser, 'Usuario creado.')

  return (
        <div>
            <Card variant="outlined" className="w-full max-w-sm m-auto mb-4 shadow">
                <CardContent>
                    <img className="w-3/5 m-auto mb-2" src={instagramLogo} alt="Inctagram Logo" />
                    <p className="text-center text-lg text-gray-500 font-sm w-5/6 m-auto">
                        Regístrate para ver fotos y videos de tus amigos.
                    </p>
                    <hr className="w-5/6 m-auto mt-2 mb-5" />
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                        {inputsSingUpForm.map(({ name, placeholder, type }: ISignUpInput) => (
                            <div key={name}>
                                <Input
                                    className="w-full mb-6"
                                    id={`standard-adornment-${name}`}
                                    type={type}
                                    value={formValue[name] as unknown}
                                    name={name}
                                    onChange={handleChange}
                                    placeholder={placeholder}
                                />
                            </div>
                        ))}
                        <Button onClick={handleSubmit} isLoading={isLoading} content={'Registrarte'} />
                    </FormControl>
                </CardContent>
                {error && <p className="text-center text-rose-500 text-sm">{error}</p>}
                <PoliciesInfo/>
            </Card>
            <ChangePageAuth
            content="¿Tienes una cuenta?"
            link="/"
            linkContent="Inicia sesión"
            />
        </div>
  )
}

export default SingUpForm
