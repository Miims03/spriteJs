require('dotenv').config()
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors())

const ChampRoute = require("./routes/ChampRoute")
app.use('/champ' , ChampRoute)

app.get("/", (req, res) => {
    res.send("Backend")
})

const PORT = process.env.PORT;

app.listen(PORT, (req , res) => {
    console.log(`Serving on port ${PORT}...`)
})
