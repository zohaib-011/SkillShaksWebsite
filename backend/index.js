const express=require('express');
const  cors=require('cors');
const app=express();
const bodyParser=require('body-parser');
const authRouter = require('./routes/authRouter');
const productRouter = require('./routes/productRouter');
const apiRouter = require('./routes/apiRouter');
 

require('dotenv').config();
require('./models/db');
const port =process.env.port||8080
app.get('/',(req,res)=>{
    res.send("Welcome Loading ...")
})
app.use(bodyParser.json());
app.use(cors());
app.use('/auth',authRouter);
app.use('/product',productRouter);
app.use('/api',apiRouter)
app.listen(port,()=>{
    console.log("server is running on the port "+port)
})