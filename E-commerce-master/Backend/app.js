const express=require('express')
const ErrorHandler = require('./middleware/error')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path');

const app =express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use('/products', express.static(path.join(__dirname, '../products')));



if(process.env.NODE_ENV !== 'PRODUCTION')
    require('dotenv').config({path:'config/.env'})

require('dotenv').config({path:'Backend/configure/.env'})
module.exports=app;