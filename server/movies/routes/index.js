const router = require("express").Router()
const MovieCtrl = require("../controllers")

router.post("/movies", MovieCtrl.create)
router.get("/movies", MovieCtrl.read)
router.put("/movies/:id", MovieCtrl.update)
router.delete("/movies/:id", MovieCtrl.delete)

module.exports = router