import { gql } from '@apollo/client'

export const UPDATE_POST = gql`
mutation updatePost($file: Upload!, $description: String) {
  updatePost(file: $file, description: $description)
}
`
export const GET_POST = gql`
query ($userName: String!) {
  getPosts(userName: $userName) {
    _id 
    file 
    typeFile 
    description 
  }
}
`
