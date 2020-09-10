const db = require("../config")
const Series = db.collection("tvSeries")
const { ObjectId } = require("mongodb")

class SeriesModel {
  static insertOne (data) {
    return Series.insertOne(data)
  }

  static find () {
    return Series.find().toArray()
  }

  static updateOne (id, data) {
    return Series.updateOne({_id: ObjectId(id)}, {
      $set: data
    })
  }

  static deleteOne (id) {
    return Series.deleteOne({_id: ObjectId(id)})
  }
}

module.exports = SeriesModel