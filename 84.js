const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
type Query { hello: String }
type Mutation { add(a:Int,b:Int): Int }
`;

const resolvers = {
    Query: { hello: () => 'Hello' },
    Mutation: { add: (_, {a,b}) => a+b }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen(3060);
