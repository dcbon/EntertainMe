const { ApolloServer, gql, makeExecutableSchema } = require("apollo-server");
const PORT = process.env.PORT || 5000
const MovieSchema = require("./Schemas/MovieSchema")
const SeriesSchema = require("./Schemas/SeriesSchema")

const typeDefs = gql`
  type Query
  type Mutation
`

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, SeriesSchema.typeDefs, MovieSchema.typeDefs],
  resolvers: [SeriesSchema.resolvers, MovieSchema.resolvers]
})

const server = new ApolloServer({ schema })

server.listen( PORT ).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});