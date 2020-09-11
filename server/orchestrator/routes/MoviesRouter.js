const router = require("express").Router()
const MovieCtrl = require("../Schemas/MovieSchema")

// router.post("/", MovieCtrl.create)
router.get("/", MovieCtrl.read)
// router.put("/:id", MovieCtrl.update)
// router.delete("/:id", MovieCtrl.delete)

module.exports = router