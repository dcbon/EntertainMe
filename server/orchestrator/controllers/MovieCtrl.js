const axios = require("axios")
const Redis = require("ioredis")
const redis = new Redis()

class MovieController {
  static async create (req, res) {
    try {
      const { data } = await axios({
        url: "http://localhost:5001/movies",
        method: "PUT"
      })
      res.status(200).json(data)
      redis.set("movies", JSON.stringify(data))
    }
    catch (err) {
      console.log(err)
      res.status(500).json({ msg: "Internal Server Error"})
    }
  }
  
  static async read (req, res) {
    try {
      const movies = JSON.parse(await redis.get("movies"))
      if (movies) res.status(200).json(movies)
      else {
        const { data } = await axios({
          url: "http://localhost:5001/movies",
          method: "GET"
        })
        res.status(200).json(data)
        redis.set("movies", JSON.stringify(data))
      }
    }
    catch (err) {
      console.log(err)
      res.status(500).json({ msg: "Internal Server Error"})
    }
  }
  
  static async update (req, res) {
    try {
      const { data } = await axios({
        url: "http://localhost:5001/movies",
        method: "PUT"
      })
      res.status(200).json(data)
      redis.set("movies", JSON.stringify(data))
    }
    catch (err) {
      console.log(err)
      res.status(500).json({ msg: "Internal Server Error"})
    }
  }
  
  static async delete (req, res) {
    try {
      const { data } = await axios({
        url: "http://localhost:5001/movies",
        method: "PUT"
      })
      res.status(200).json(data)
      redis.set("movies", JSON.stringify(data))
    }
    catch (err) {
      console.log(err)
      res.status(500).json({ msg: "Internal Server Error"})
    }
  }
}

module.exports = MovieController