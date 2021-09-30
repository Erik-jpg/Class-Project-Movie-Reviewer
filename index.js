const { ApolloServer } = require('Apollo-server');
const { MongoClient } = require('mongodb');
const typeDefs = require('./typeDefs');
const buildResolvers = require('./buildResolvers');

// const server = new ApolloServer({ typeDefs, resolvers });

const client = new MongoClient('mongodb://localhost:27017');

const app = async () => {
    const connection = await client.connect().catch(console.error);
    const db = connection.db('moviesGQL');
    const resolvers = buildResolvers(db);
    const server = new ApolloServer({ typeDefs, resolvers });
    server.listen().then(({ url }) => {
        console.log(`server ready at ${url}`);
    });
};


app();

