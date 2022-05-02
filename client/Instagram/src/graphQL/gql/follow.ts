import { gql } from '@apollo/client'

export const MODIFY_FOLLOW = gql`
mutation($userName: String!) {
    modifeFollowUser(userName: $userName)
  }
`
export const GET_FOLLOW = gql`
query($userName: String!) {
    follow(userName: $userName)
  }
`
export const GET_FOLLOWER_LIST = gql`
query($userName: String!) {
    getFollowersList(userName: $userName) {
      _id,
      follow {
        userName
        avatar
        description
      }
    }
  }
`
export const GET_FOLLOW_ME_LIST = gql`
query($userName: String!) {
  getFollow(userName: $userName) {
    _id,
    follow {
      userName
      avatar
      description
    }
  }
}
`
