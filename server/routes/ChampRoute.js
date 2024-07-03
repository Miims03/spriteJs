const express = require("express");
const { addChamp , findChamp ,  getChamp } = require("../controllers/ChampControl");

const router = express.Router();

router.post("/add", addChamp)
router.get("/find/:id", findChamp)
router.get("/find", getChamp)

module.exports = router;