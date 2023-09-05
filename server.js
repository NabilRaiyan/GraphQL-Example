const express = require('express');
// const { buildSchema }  = require('graphql');
const { ApolloServer } = require('apollo-server-express');

const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql'],
}); // here ** means dir or sub dir and * means any file name which extension is graphql

const resolversArray = loadFilesSync('**/*', {
    extensions: ['resolver.js']
});

async function startApolloServer(){
    const app = express();

    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray,
    });

    const server = new ApolloServer({
        schema: schema
    });

    await server.start();
    server.applyMiddleware({
        app, 
        path: '/graphql'
    });

    app.listen(3000, ()=>{
        console.log("GraphQl Server is listining on port 3000...");
    });
}
startApolloServer();





