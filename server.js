const express = require('express');
// const { buildSchema }  = require('graphql');
const { graphqlHTTP } = require('express-graphql');
// const path = require('path');

const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql'],
}); // here ** means dir or sub dir and * means any file name which extension is graphql

const resolversArray = loadFilesSync('**/*', {
    extensions: ['resolver.js']
});

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
    // { 
    //     Query: {
    //         products: async(parent, args, context, info)=>{
    //             const product = await Promise.resolve(parent.products);
    //             return product;
    //         },
    //         orders: (parent)=>{
    //             return parent.orders;
    //         },
    //     }
    // }
});


// // values
// const root = {
//     products: require('./products/products.model'),
//     orders: require('./orders/orders.model'),
//     customers: require('./customes/customers.model'),
// }


const app = express();
// mounting graphql values and route
app.use('/graphql',graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: true,
}));

app.listen(3000, ()=>{
    console.log("GraphQl Server is listining on port 3000...");
});





// // schema ( here ! means field is required )
// // ID is graphql type
// const schema = buildSchema(`
//     type Query {
//         products: [Product]
//         orders: [Order]
//     }

//     type Product {
//         id: ID!
//         description: String!
//         reviews: [Review]
//         price: Float!
//     }
//     type Review {
//         rating: Float!
//         comment: String
//     }

//     type Order {
//         date: String!
//         subtotal: Float!
//         items: [OrderItem]
//     }

//     type OrderItem {
//         product: Product!
//         quantity: Int!
//     }
// `);