const router = require("express").Router()
const SeriesCtrl = require("../controllers")

router.post("/tv", SeriesCtrl.create)
router.get("/tv", SeriesCtrl.read)
router.get("/tv/:id", SeriesCtrl.find)
router.put("/tv/:id", SeriesCtrl.update)
router.delete("/tv/:id", SeriesCtrl.delete)

module.exports = router