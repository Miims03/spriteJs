const express = require("express");
const { addChamp } = require("../controllers/ChampControl");

const router = express.Router();

router.post("/add", addChamp)

module.exports = router;