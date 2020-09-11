const router = require("express").Router()
const SeriesCtrl = require("../Schemas/SeriesSchema")

// router.post("/", SeriesCtrl.create)
router.get("/", SeriesCtrl.read)
// router.put("/:id", SeriesCtrl.update)
// router.delete("/:id", SeriesCtrl.delete)

module.exports = router