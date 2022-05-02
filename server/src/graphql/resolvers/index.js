const userController = require('./../../controller/user')
const followController = require('./../../controller/follows')
const postController = require('./../../controller/post')
const commentaryController = require('./../../controller/commentary')
const likeController = require('./../../controller/like')

const {
    GraphQLUpload
} = require('graphql-upload');

const resolvers = {
    Upload: GraphQLUpload,

    Query: {
        search: (_, { search }) => userController.getSearch(search),
        getUser: (_, { userName }) => userController.getUser(userName),
        getAvatar: (_, { userName }) => userController.getAvatar(userName),
        loginUser: (_, { email, password }) => userController.loginUser(email, password),
        getSuggestions: (_, x, { _id }) => userController.getUserSuggestions(_id),
        //FOLLOW
        getFollowersList: (_, { userName }) => followController.getFollows(userName),
        getFollow: (_, { userName }) => followController.getFollowMe(userName),
        follow: (_, { userName }, { _id }) => followController.isFollowUser(userName, _id),
        //Post
        getPosts: (_, { userName }) => postController.getPost(userName),
        //Comentary
        getCommetaries: (_, { postId }) => commentaryController.getCommentaries(postId),
        //Like
        // isLike: (_, {postId}, {_id}) => likeController.isLike(postId, _id)
        isLike: (_, {postId}, {_id}) => likeController.isLike(postId, _id)
    },
    Mutation: {
        // User
        createUser: (_, arg) => userController.createUserController(arg),
        updateAvatar: (_, {file}, {_id}) => userController.updateAvatar(file, _id),
        deleteAvatar: (_, x, {_id}) => userController.deleteAvatar(_id),
        editProfile: (_, {user}, {_id}) => userController.editProfile(user, _id),
        changePassword: (_, passwords, {_id}) => userController.changePassword(passwords, _id),
        // Post
        updatePost: (_, {file, description}, {_id}) => postController.updatePost(file, description, _id),
        // Commentary
        updateCommentary: (_, {postId, commentary}, {_id}) => commentaryController.createCommentary(postId, commentary, _id),
        //Follow
        modifeFollowUser: (_, {userName}, {_id}) => followController.changeFollow(userName, _id),
        //Like
        like: (_, {postId}, {_id}) => likeController.likeElement(postId, _id)
    },
};

module.exports = resolvers;