const { gql } = require("apollo-server");
const axios = require("axios")
const Redis = require("ioredis")
const redis = new Redis()

const typeDefs = gql`
  type movies {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String] 
  }

  type MoviesSeries {
    movies: [movies],
    tvSeries: [movies]
  }

  extend type Query {
    getMoviesSeries: MoviesSeries
  }
`

const resolvers = {
  Query: {
    getMoviesSeries: async () => {
      const movies = JSON.parse(await redis.get("movies"))
      const series = JSON.parse(await redis.get("tvSeries"))

      if (!movies) {
        const { data } = await axios({
          url: "http://localhost:5001/movies",
          method: "GET"
        })
        redis.set("movies", JSON.stringify(data))
      }

      if (!series) {
        const { data } = await axios({
          url: "http://localhost:5002/tv",
          method: "GET"
        })
        redis.set("tvSeries", JSON.stringify(data))
      }

      if (movies && series) {
        return { movies, series }
      }
    }
  }
};

module.exports = { typeDefs, resolvers };


// type movies {
//   id: ID
//   title: String
//   overview: String
//   poster_path: String
//   popularity: Int
//   tags: [String] 
// }

// type tvSeries {
//   id: ID
//   title: String
//   overview: String
//   poster_path: String
//   popularity: Int
//   tags: [String] 
// }

// class EntMeController {  
//   static async read (req, res) {
//     try {
//       const movies = JSON.parse(await redis.get("movies"))
//       const series = JSON.parse(await redis.get("tvSeries"))

//       if (!movies) {
//         const { data } = await axios({
//           url: "http://localhost:5001/movies",
//           method: "GET"
//         })
//         redis.set("movies", JSON.stringify(data))
//       }

//       if (!series) {
//         const { data } = await axios({
//           url: "http://localhost:5002/tv",
//           method: "GET"
//         })
//         redis.set("series", JSON.stringify(data))
//       }

//       if (movies && series) {
//         res.status(200).json({ movies, series })
//       }
//     }
//     catch (err) {
//       console.log(err)
//       res.status(500).json({ msg: "Internal Server Error"})
//     }
//   }
// }

// module.exports = EntMeController