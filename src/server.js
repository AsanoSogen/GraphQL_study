const { ApolloServer, gql } = require("apollo-server");

// GraphQLスキーマの定義
const typeDefs = gql`
    type Query {
        info: String!
    }
`;

const resolvers = {
    Query: {
        info: () => "test",
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => console.log(`${url}でサーバー実行中`));