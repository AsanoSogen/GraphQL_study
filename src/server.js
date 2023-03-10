const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");
const path = require("path");

let links = [
    {
        id: "link-0",
        description: "GraphQLを学ぶ",
        url: "www.graphql-tutorial.com",
    },
]

const resolvers = {
    Query: {
        info: () => "test",
        feed: () => links,
    },
    Mutation: {
        post: (parent, args) => {
            let idCount = links.length;

            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }

            links.push(link);
            return links;
        },
    },
};

const server = new ApolloServer({
    typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"),"utf-8"),
    resolvers,
});

server.listen().then(({ url }) => console.log(`${url}でサーバー実行中`));