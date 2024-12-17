const express = require("express")
const app = express()
const path = require('path')

const userRoutes = require("./server/routes/user")
const gardenRoutes = require("./server/routes/garden")
const plantRoutes = require("./server/routes/plant")

app.use(express.json()); 

//CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});

app.use(express.static(path.join(__dirname, 'client')))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'client', 'pages', 'index.html')))
app.get('/account-management', (req, res) => res.sendFile(path.join(__dirname, 'client', 'pages', 'account-management.html')))
app.get('/garden-management', (req, res) => res.sendFile(path.join(__dirname, 'client', 'pages', 'garden-management.html')))
app.get('/plant-management', (req, res) => res.sendFile(path.join(__dirname, 'client', 'pages', 'plant-management.html')))

app.use('/users', userRoutes)
app.use('/gardens', gardenRoutes)
app.use('/plants', plantRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started! Listening on port ${PORT}! :)`))