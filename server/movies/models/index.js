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

  static findOne (id) {
    return Movie.findOne({_id: ObjectId(id)})
  }

  static updateOne (id, data) {
    return Movie.findOneAndUpdate({_id: ObjectId(id)}, { $set: data }, { returnOriginal: false })
  }

  static deleteOne (id) {
    return Movie.findOneAndDelete({_id: ObjectId(id)})
  }
}

module.exports = MovieModel