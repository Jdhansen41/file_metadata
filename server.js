// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
 const bodyParser = require('body-parser')
const path = require('path')


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))
app.use(bodyParser.json())

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendfile('views/index.html')
})

//Route for file upload
app.post("/", upload.single('file-to-upload'),(request, response) =>{
  response.json(request.file)
})



// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
