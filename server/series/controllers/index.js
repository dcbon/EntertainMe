const Series = require("../models")

class SeriesController {
  static async create (req, res) {
    try {
      const {
        title, 
        overview, 
        poster_path, 
        popularity, 
        tags
      } = req.body

      const data = await Series.insertOne({
        title, 
        overview, 
        poster_path, 
        popularity, 
        tags
      })
      res.status(201).json(data.ops[0])
    }
    catch (err) {
      console.log('err create', err)
      res.status(500).json({ msg: "Internal Server Error" })
    }
  }
  
  static async read (req, res) {
    try {
      const data = await Series.find()
      res.status(200).json(data)
    }
    catch (err) {
      console.log('err read', err)
      res.status(500).json({ msg: "Internal Server Error" })
    }
  }
  
  static async find (req, res) {
    try {
      const data = await Series.findOne(req.params.id)
      res.status(200).json(data)
    }
    catch (err) {
      console.log('err find', err)
      res.status(500).json({ msg: "Internal Server Error" })
    }
  }
  
  static async find (req, res) {
    try {
      const data = await Series.findOne(req.params.id)
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

      const data = await Series.updateOne(req.params.id, {
        title, 
        overview, 
        poster_path, 
        popularity, 
        tags
      })
      res.status(200).json(data.value)
    }
    catch (err) {
      console.log('err update', err)
      res.status(500).json({ msg: "Internal Server Error" })
    }
  }
  
  static async delete (req, res) {
    try {
      const data = await Series.deleteOne(req.params.id)
      res.status(200).json(data)
    }
    catch (err) {
      console.log('err delete', err)
      res.status(500).json({ msg: "Internal Server Error" })
    }
  }
} 

module.exports = SeriesController