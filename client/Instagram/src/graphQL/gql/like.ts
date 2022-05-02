import { gql } from '@apollo/client'

export const LIKE_POST = gql`
mutation($postId: String!) {
    like(postId: $postId)
  }
`
export const IS_LIKE = gql`
query($postId: String!) {
    isLike(postId: $postId)
  }
`
