const axios = require("axios")
const Redis = require("ioredis")
const redis = new Redis()

class EntMeController {  
  static async read (req, res) {
    try {
      const movies = JSON.parse(await redis.get("movies"))
      const series = JSON.parse(await redis.get("series"))

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
        redis.set("series", JSON.stringify(data))
      }

      if (movies && series) {
        res.status(200).json({ movies, series })
      }
    }
    catch (err) {
      console.log(err)
      res.status(500).json({ msg: "Internal Server Error"})
    }
  }
}

module.exports = EntMeController