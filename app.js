const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// imported routes 
const productRoutes = require('./routes/product.route')

// middleware
app.use(express.json());
app.use(cors());



app.use("/api/v1/products",productRoutes)

// query data 




app.get("/", (req, res) => {
    res.send("Route is running");
  });
  
module.exports = app;