const router = require("express").Router()
const MovieRouter = require("./MoviesRouter")
const SeriesRouter = require("./SeriesRouter")
const EntMeCtrl = require("../Schemas/EntertainMeSchema")

router.get('/', (req,res) => res.status(200).json({msg: 'connected'}))
router.get('/entertainme', EntMeCtrl.read)
router.use('/movies', MovieRouter)
router.use('/tv', SeriesRouter)

module.exports = router