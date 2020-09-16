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
      try {
        const series = JSON.parse(await redis.get("tvSeries"))
        if (series) return series
        else {
          const { data } = await axios.get("http://localhost:5002/tv")
          return data
        }
      }
      catch (err) {
        console.log('er get series', err)
      }
    },
    tvSeriesOne: async (_, args) => {
      try {
        const { id } = args
        const { data } = await axios.get(`http://localhost:5002/tv/${id}`)
        return data
      }
      catch (err) {
        console.log('er get series one', err)
      }
    }
  },
  Mutation: {
    postSeries: async (_, args) => {
      try {
        const { newSeries } = args
        const { data } = await axios.post("http://localhost:5002/tv", newSeries )
        redis.del("tvSeries")
        return data
      }
      catch (err) {
        console.log('err post series', err)
      }
    },
    
    putSeries: async (_, args) => {
      try {
        const { id, newSeries } = args
        const { data } = await axios.put(`http://localhost:5002/tv/${id}`, newSeries )
        redis.del("tvSeries")
        return data
      }
      catch (err) {
        console.log('er put series', err)
      }
    },
    
    delSeries: async (_, args) => {
      try {
        const { id, delSeries } = args
        const { data } = await axios.delete(`http://localhost:5002/tv/${id}`, delSeries )
        redis.del("tvSeries")
        return data
      }
      catch (err) {
        console.log('er del series', err)
      }
    }
  }
};

module.exports = { typeDefs, resolvers };
