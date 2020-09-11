const { gql } = require("apollo-server");
const axios = require("axios")
const Redis = require("ioredis")
const redis = new Redis()


const typeDefs = gql`
  type Movies {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String] 
  }

  extend type Query {
    Movies: [Movies]
    Movie(id: ID!): Movies
  }

  input inputMovie {
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String] 
  }

  extend type Mutation {
    postMovie(newMovie : inputMovie) : Movies
    putMovie(id : ID, newMovie : inputMovie) : Movies
    delMovie(id : ID) : Movies
  }
`

const resolvers = {
  Query: {
    Movies: async () => {
      const movies = JSON.parse(await redis.get("movies"))
      if (movies) return movies
      else {
        const { data } = await axios.get("http://localhost:5001/movies")
        return data
      }
    },
    Movie: async (_, args) => {
      const { id } = args
      const { data } = await axios.get(`http://localhost:5001/movies/${id}`)
      return data
    }
  },
  Mutation: {
    postMovie: async (_, args) => {
      const { newMovie } = args
      const { data } = await axios.post("http://localhost:5001/movies", newMovie )
      redis.del("movies")
      return data
    },
    
    putMovie: async (_, args) => {
      const { id, newMovie } = args
      const { data } = await axios.put(`http://localhost:5001/movies/${id}`, newMovie )
      redis.del("movies")
      return data
    },
    
    delMovie: async (_, args) => {
      const { id, delMovie } = args
      const { data } = await axios.put(`http://localhost:5001/movies/${id}`, delMovie )
      redis.del("movies")
      return data
    }
  }
};

module.exports = { typeDefs, resolvers };
