const { ApolloServer, gql, makeExecutableSchema } = require("apollo-server");
const PORT = process.env.PORT || 5000
const EntMeSchema = require("./Schemas/EntertainMeSchema")
const MovieSchema = require("./Schemas/MovieSchema")
// const SeriesSchema = require("../Schemas/SeriesSchema")
// const cors = require("cors")

const typeDefs = gql`
  type Query
  type Mutation
`

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, EntMeSchema.typeDefs, MovieSchema.typeDefs],
  resolvers: [EntMeSchema.resolvers, MovieSchema.resolvers]
})

// app.use(cors())
const server = new ApolloServer({ schema })

server.listen( PORT ).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});