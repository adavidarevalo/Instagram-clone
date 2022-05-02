import { useContext, createContext, ReactChild, ReactChildren, useEffect, useMemo, useState } from 'react'
import _ from 'lodash'
import { useLazyQuery, useMutation } from '@apollo/client'
import { GET_USER, UPDATE_AVATAR, DELETE_AVATAR, EDIT_USSER, CHANGE_PASSWORD } from '../graphQL/gql/user'
import { authContext } from './auth'
import { userSchema } from '../schemas/user'
import { IUserPassword } from '../types/user'
import changePassowrdSchema from '../schemas/change_password'

interface IProps {
    children: ReactChild | ReactChildren;
}

export const userDataContext = createContext<any>(null)

export default function UserDataContext ({ children }: IProps) {
  const [user, setUser] = useState<any>(false)
  const { auth } = useContext(authContext)

  const [updateImage] = useMutation<any>(UPDATE_AVATAR)
  const [deleteImage] = useMutation<any>(DELETE_AVATAR)
  const [getUserData] = useLazyQuery(GET_USER)
  const [getEditUser] = useMutation<any>(EDIT_USSER)
  const [getChangedPassword] = useMutation<any>(CHANGE_PASSWORD)

  const updateAvatar = async (file: File, handleClose: () => void) => {
    try {
      const result = await updateImage({
        variables: {
          file: file
        }
      })
      setUser((prevState: any) => ({
        ...prevState,
        avatar: result.data.updateAvatar
      }))
      handleClose()
    } catch (error) {

    }
  }

  const deleteAvatar = async (handleClose: () => void) => {
    try {
      await deleteImage()
      setUser((prevState: any) => ({
        ...prevState,
        avatar: null
      }))
      handleClose()
    } catch (error) {

    }
  }

  const getUser = async (userName: string) => {
    const response = await getUserData({
      variables: { userName }
    })
    const { getUser } = response.data
    setUser(getUser[0])
  }

  const editUser = async (user: any) => {
    const validate = await userSchema.validate(user)
    if (!validate) return null
    const result = await getEditUser({
      variables: { user }
    })
    const userEdited = _.get(result, 'data.editProfile', false)
    if (userEdited === false) return null

    setUser(result.data.editProfile)
  }

  const changePasword = async (passwords: IUserPassword) => {
    const validate = await changePassowrdSchema.validate(passwords)
    if (!validate) return null
    const result = await getChangedPassword({
      variables: {
        lastPasword: passwords.lastPassowrd,
        newPassword: passwords.password
      }
    })
    console.log('PEPE ', result)
  }

  useEffect(() => {
    if (auth.userName) {
      getUser(auth.userName)
    }
  }, [auth])

  const authFn = useMemo(() => {
    return {
      user,
      updateAvatar,
      deleteAvatar,
      editUser,
      changePasword
    }
  }, [user])

  return <userDataContext.Provider value={{ ...authFn }}>{children}</userDataContext.Provider>
}
