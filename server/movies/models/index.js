const db = require("../config")
const Movie = db.collection("movies")
const { ObjectId } = require("mongodb")

class MovieModel {
  static insertOne (data) {
    return Movie.insertOne(data)
  }

  static find () {
    return Movie.find().toArray()
  }

  static updateOne (id, data) {
    return Movie.updateOne({_id: ObjectId(id)}, {
      $set: data
    })
  }

  static deleteOne (id) {
    return Movie.deleteOne({_id: ObjectId(id)})
  }
}

module.exports = MovieModel