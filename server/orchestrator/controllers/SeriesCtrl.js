const axios = require("axios")
const Redis = require("ioredis")
const redis = new Redis()

class SeriesController {
  static async create (req, res) {
    // try {
    //   const { data } = await axios({
    //     url: "http://localhost:5002/tv",
    //     method: "PUT"
    //   })
    //   res.status(200).json(data)
    //   redis.set("movies", JSON.stringify(data))
    // }
    // catch (err) {
    //   console.log(err)
    //   res.status(500).json({ msg: "Internal Server Error"})
    // }
  }
  
  static async read (req, res) {
    try {
      const series = JSON.parse(await redis.get("series"))
      if (series) res.status(200).json(series)
      else {
        const { data } = await axios({
          url: "http://localhost:5002/tv",
          method: "GET"
        })
        res.status(200).json(data)
        redis.set("series", JSON.stringify(data))
      }
    }
    catch (err) {
      console.log(err)
      res.status(500).json({ msg: "Internal Server Error"})
    }
  }
  
  static async update (req, res) {
    // try {
    //   const { data } = await axios({
    //     url: "http://localhost:5002/tv",
    //     method: "PUT"
    //   })
    //   res.status(200).json(data)
    //   redis.set("movies", JSON.stringify(data))
    // }
    // catch (err) {
    //   console.log(err)
    //   res.status(500).json({ msg: "Internal Server Error"})
    // }
  }
  
  static async delete (req, res) {
    // try {
    //   const { data } = await axios({
    //     url: "http://localhost:5002/tv",
    //     method: "PUT"
    //   })
    //   res.status(200).json(data)
    //   redis.set("movies", JSON.stringify(data))
    // }
    // catch (err) {
    //   console.log(err)
    //   res.status(500).json({ msg: "Internal Server Error"})
    // }
  }
}

module.exports = SeriesController