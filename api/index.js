const express = require ("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");




const app = express();
const port =8000;
const cors = require("cors");
app.use(cors());



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


const jwt = require ("jsonwebtoken");


mongoose.connect("mongodb+srv://zerontec:87114@cluster0.mg9ov.mongodb.net/",{

useNewUrlParser: true,
useUnifiedTopology: true,


}).then (()=> {

        console.log("connecte to MongoDb Excelente ")

}).catch((err) =>{

console.log("Error connecting  to  DB",err)


} )




app.listen(port, () => {

console.log("Server runnin on port 8000 " )

})