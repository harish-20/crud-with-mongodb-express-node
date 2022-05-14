require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
//body-parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Db connections
mongoose.connect(process.env.mongodb_connecttion_str, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error',(error) => console.log(error));
db.once('open',() => console.log('Db conneted succesfull'));

//routing 
const employee = require('./routes/employee');
app.use('/employee',employee);

//port creation
app.listen(3000,() => console.log('server started in 3000 port'));
