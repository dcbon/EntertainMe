const { gql } = require("apollo-server");
const axios = require("axios")
const Redis = require("ioredis")
const redis = new Redis()


const typeDefs = gql`
  type Series {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String] 
  }

  extend type Query {
    tvSeries: [Series]
    tvSeriesOne(id: ID!): Series
  }

  input inputSeries {
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String] 
  }

  extend type Mutation {
    postSeries(newSeries : inputSeries) : Series
    putSeries(id : ID, newSeries : inputSeries) : Series
    delSeries(id : ID) : Series
  }
`

const resolvers = {
  Query: {
    tvSeries: async () => {
      const series = JSON.parse(await redis.get("tvSeries"))
      if (series) return series
      else {
        const { data } = await axios.get("http://localhost:5002/tv")
        return data
      }
    },
    tvSeriesOne: async (_, args) => {
      const { id } = args
      const { data } = await axios.get(`http://localhost:5002/tv/${id}`)
      return data
    }
  },
  Mutation: {
    postSeries: async (_, args) => {
      const { newSeries } = args
      const { data } = await axios.post("http://localhost:5002/tv", newSeries )
      redis.del("tvSeries")
      return data
    },
    
    putSeries: async (_, args) => {
      const { id, newSeries } = args
      const { data } = await axios.put(`http://localhost:5002/tv/${id}`, newSeries )
      redis.del("tvSeries")
      return data
    },
    
    delSeries: async (_, args) => {
      const { id, delSeries } = args
      const { data } = await axios.put(`http://localhost:5002/tv/${id}`, delSeries )
      redis.del("tvSeries")
      return data
    }
  }
};

module.exports = { typeDefs, resolvers };
