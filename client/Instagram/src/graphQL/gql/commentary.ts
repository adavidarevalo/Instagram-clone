import { gql } from '@apollo/client'

export const UPDATE_COMMENTARY = gql`
mutation updateCommentary($postId: String, $commentary: String) {
  updateCommentary(postId: $postId, commentary: $commentary)
}
`

export const GET_COMMENTARIES = gql`
query ($postId: String!) {
  getCommetaries(postId: $postId) {
    _id
    idUser {
      userName
      avatar
    }
    commentary
  }
}
`
