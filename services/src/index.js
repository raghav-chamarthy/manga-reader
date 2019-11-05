require('dotenv').config()

import express from "express"
import {ApolloServer,gql} from 'apollo-server-express'
const port = process.env.PORT || 3000;
const app = express();

// const typeDefs = "#root/graphql/typeDefs";
// const resolvers = "#root/graphql/resolvers"; 

const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;


const apolloServer = new ApolloServer({typeDefs,resolvers: {}});

apolloServer.applyMiddleware({app,path : "/graphql"});

app.all('*',(req,res) => {
    res.status(404).send({
        "status" : "missing route"
    })
});
app.listen(port ,'0.0.0.0', () => {
    console.log(`server up and running on ${port}`)
});


