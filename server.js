const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser')
var mongoose = require('mongoose');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/NameDatabase", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(client => {
    console.log('Connected to Database');
})
    .catch(error => console.log(error.message));
const port = process.env.port || "3000";
//CORS Solution

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'DELETE, GET, POST, OPTIONS, PUT');
    next();
});

const api = require('./routes/api');
app.use('/', api);




app.listen(port);
console.log("Server Listening at port " + port);