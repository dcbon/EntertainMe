const Movie = require("../models")

class MoviesController {
  static async create (req, res) {
    try {
      const {
        title, 
        overview, 
        poster_path, 
        popularity, 
        tags
      } = req.body

      const data = await Movie.insertOne({
        title, 
        overview, 
        poster_path, 
        popularity, 
        tags
      })
      res.status(201).json(data)
    }
    catch (err) {
      console.log('err create', err)
      res.status(500).json({ msg: "Internal Server Error" })
    }
  }
  
  static async read (req, res) {
    try {
      const data = await Movie.find()
      res.status(200).json(data)
    }
    catch (err) {
      console.log('err read', err)
      res.status(500).json({ msg: "Internal Server Error" })
    }
  }
  
  static async find (req, res) {
    try {
      const data = await Movie.findOne(req.params.id)
      res.status(200).json(data)
    }
    catch (err) {
      console.log('err find', err)
      res.status(500).json({ msg: "Internal Server Error" })
    }
  }
  
  static async update (req, res) {
    try {
      const {
        title, 
        overview, 
        poster_path, 
        popularity, 
        tags
      } = req.body

      const data = await Movie.updateOne(req.params.id, {
        title, 
        overview, 
        poster_path, 
        popularity, 
        tags
      })
      res.status(200).json(data)
    }
    catch (err) {
      console.log('err update', err)
      res.status(500).json({ msg: "Internal Server Error" })
    }
  }
  
  static async delete (req, res) {
    try {
      const data = await Movie.deleteOne(req.params.id)
      res.status(200).json(data)
    }
    catch (err) {
      console.log('err delete', err)
      res.status(500).json({ msg: "Internal Server Error" })
    }
  }
} 

module.exports = MoviesController