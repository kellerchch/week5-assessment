var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
var cors = require('cors');

//custom file
var controller = require('./controller.js');


var app = express();

var corsOptions = {
  origin: true,
  credentials: true
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

//Internal Routes
app.get('/toDo', (req, res) => {


})

app.post('/toDo/submit', (req, res) => {
  var frontEndtoDo = req.body.toDo;
  controller.toDo = frontEndtoDo;
  res.send(controller);
})


app.listen(3000, () => {
  console.log('Listening on port 3000')
})
