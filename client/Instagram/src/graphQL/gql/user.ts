import { gql } from '@apollo/client'

export const CREATE_USER = gql`
    mutation ($name: String!, $userName: String!, $email: String!, $password: String!) {
        createUser(name: $name, userName: $userName, email: $email, password: $password) {
            token
        }
    }
`

export const LOGIN_USER = gql`
    query ($email: String!, $password: String!) {
      loginUser(email: $email, password: $password) {
            token
        }
    }
`

export const GET_USER = gql`
query ($userName: String!) {
  getUser(userName: $userName) {
      name
      userName
      email
      avatar
      description
      _id
      avatar
      website
      description
  }
}
`
export const GET_SEARCH = gql`
query ($search: String!) {
  search(search: $search) {
      name
      userName
      _id
      email
      avatar
      description
  }
}
`

export const GET_USER_SUGGESTIONS = gql`
query getSuggestions {
  getSuggestions {
    userName,
    name,
    avatar
  }
}
`

export const EDIT_USSER = gql`
mutation($user: UserInput) {
  editProfile(user: $user) {
  name
  userName
  email
  website
  description
  phoneNumber 
  gender
  _id
  }
}
`

export const CHANGE_PASSWORD = gql`
mutation changePassword($lastPasword: String, $newPassword: String) {
  changePassword(lastPasword: $lastPasword, newPassword: $newPassword)
}
`

export const UPDATE_AVATAR = gql`
mutation updateAvatar($file: Upload!) {
  updateAvatar(file: $file)
}
`
export const DELETE_AVATAR = gql`
mutation deleteAvatar {
  deleteAvatar
}
`
