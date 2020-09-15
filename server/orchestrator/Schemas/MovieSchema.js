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
    Movie(_id: ID!): Movies
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
    putMovie(_id : ID, newMovie : inputMovie) : Movies
    delMovie(_id : ID) : Movies
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
      const { _id } = args
      const { data } = await axios.get(`http://localhost:5001/movies/${_id}`)
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
      const { _id, newMovie } = args
      const { data } = await axios.put(`http://localhost:5001/movies/${_id}`, newMovie )
      redis.del("movies")
      return data
    },
    
    delMovie: async (_, args) => {
      const { _id, delMovie } = args
      const { data } = await axios.delete(`http://localhost:5001/movies/${_id}`, delMovie )
      redis.del("movies")
      return data
    }
  }
};

module.exports = { typeDefs, resolvers };
