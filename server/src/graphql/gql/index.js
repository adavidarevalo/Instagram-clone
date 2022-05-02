const { gql } = require('apollo-server');

const typeDefs = gql`
#User
  type User {
    name: String!
    userName: String!
    email: String!
    avatar: String
    website: String
    description: String
    phoneNumber: String 
    gender: String
    _id: String!
  }
  input UserInput {
    name: String
    userName: String
    email: String
    website: String
    description: String
    phoneNumber: String 
    gender: String
    _id: String
  }
  type token {
    token: String
  }

#Follow
  scalar Upload

type follow {
  userName: String
  avatar: String
  description: String
}

type userFollow {
  _id: String
  idUser: String
  follow: follow
}

type UpdateAvatar {
  avatar: String
  status: Boolean
}

type Login {
  email: String
  password: String
}

type Post {
  _id: String!
  idUser: User!
  file: String
  typeFile: String
  description: String
}

scalar Upload

#Commentary
type Commentary {
  _id: String!
  idUser: User!
  commentary: String!
}
  type Query {
    #User
    search(search: String): [User]
    getUser(userName: String!): [User]
    loginUser(email: String, password: String): token
    getAvatar(userName: String!): String
    getSuggestions: [User]
    #Follow
    getFollowersList(userName: String!): [userFollow]
    getFollow(userName: String!): [userFollow]
    follow(userName: String!): Boolean
    #Post
    getPosts(userName: String!): [Post]    
    #Commentary
    getCommetaries(postId: String!): [Commentary]
    #Like
    isLike(postId: String!): Boolean!
    
  }
  type Mutation {
    #User
    createUser(name: String, userName: String, email: String, password: String): token
    updateAvatar(file: Upload!): String!
    deleteAvatar: String!
    editProfile(user: UserInput): User
    changePassword(lastPasword: String, newPassword: String): Boolean!
    #Follow
    modifeFollowUser(userName: String!): Boolean!
    #Post
    updatePost(file: Upload!, description: String): String!
    #Commentary
    updateCommentary(postId: String, commentary: String): Boolean
    #Like
    like(postId: String!): Boolean!
  }
`;

module.exports = typeDefs
