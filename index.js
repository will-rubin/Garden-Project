const express = require("express")
const app = express()

const path = require('path')
const https = require('https')

const userRoutes = require("./server/routes/user")
const gardenRoutes = require("./server/routes/garden")
const plantRoutes = require("./server/routes/plant")

//CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});

app.use(express.json()); 

app.use(express.static(path.join(__dirname, 'client')))

app.use('/users', userRoutes)
app.use('/gardens', gardenRoutes)
app.use('/plants', plantRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started! Listening on port ${PORT}! :)`))