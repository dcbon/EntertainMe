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

  static findOne (id) {
    return Series.findOne({_id: ObjectId(id)})
  }

  static updateOne (id, data) {
    return Series.findOneAndUpdate({_id: ObjectId(id)}, { $set: data }, { returnOriginal: false })
  }

  static deleteOne (id) {
    return Series.findOneAndDelete({_id: ObjectId(id)})
  }
}

module.exports = SeriesModel