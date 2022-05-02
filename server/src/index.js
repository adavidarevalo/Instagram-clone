const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const {
  GraphQLUpload,
  graphqlUploadExpress,
} = require('graphql-upload');
require("dotenv").config();
const cors = require("cors");
const typeDefs = require("./graphql/gql");
const resolvers = require("./graphql/resolvers");
const connectDB = require("./mongoDB/config");
const tokenFn = require("./utils/token");
const path = require('path');


connectDB();

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
      context: ({ req }) => {
    if (req.headers?.authorization === "Bearer null") return null;
    const token = req.headers.authorization;
    if (token === "") return null;

    const result = tokenFn.verifyToken(token.replace("Bearer ", ""));
    if (!result) return null;

    return result;
  },
  });
  await server.start();

  const app = express();

  app.use("/public", express.static(path.join(__dirname, './public')))
  app.use(graphqlUploadExpress());
  app.use(cors());

  server.applyMiddleware({ app });

  await new Promise(r => app.listen(process.env.PORT, r));

  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
}

startServer();