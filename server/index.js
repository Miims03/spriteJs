require('dotenv').config()
const express = require("express");
const cors = require("cors");
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }))

const ChampRoute = require("./routes/ChampRoute")
app.use('/champ' , ChampRoute)

app.get("/", (req, res) => {
    res.send("Backend")
})

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadsDir);
    },
    filename: function (req, file, cb) {
      const customName = req.body.filename ? `${req.body.filename}${path.extname(file.originalname)}` : file.originalname;
      cb(null, customName);
    }
  });
  
  const upload = multer({ storage: storage });
  
  // Middleware to serve static files from the "uploads" directory
  app.use('/uploads', express.static(uploadsDir));
  
  // Route to handle image upload
  app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    res.status(200).json({ url: fileUrl });
  });
  
const PORT = process.env.PORT;

app.listen(PORT, (req , res) => {
    console.log(`Serving on port ${PORT}...`)
})
