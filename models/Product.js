const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    name: {
      type: String,
      required : [true, "please provide a name"],
      trim : true,
      unique : [true, 'Name must be unique'],
      minLength: [3, "Name must be 3 characters"],
      maxLength: [100, "Provide a valid name"]
    },
    description : {
      type : String,
      required : true
    },
    price :{
      type : Number,
      required: true,
      min: [0, "Price must be a Number"],
      validate: {
        validator :(value)=>{
          const isInteger = Number.isInteger(value)
          if(isInteger){
            return true
          }else{
            return false
          }
        },
        message: "Number Must Be a Integer Number"
      }
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values : ["kg","ltr","piece"],
        message: `unit value must be {VALUE}, value must be kg/ltr/piece`
      }
    },
    quantity : {
      type :Number,
      required :  true,
      min: [0, "quantity can't be negative"],
      validate : {
        validator: (value)=>{
          const isInteger = Number.isInteger(value)
          if(isInteger){
            return true
          } else{
            return false
          }
        },
        message: "Number Must Be a Integer Number"
      }
    },
    status : {
      type : String,
      required : true,
      enum:{
        values: ['in-stock','out-of-stock','discontinue'],
        message:"status can be {VALUE}"
      }
    } 
    // createdAt: {
    //   type : Date,
    //   default: Date.now
    // },
    // updateAt: {
    //   type: Date,
    //   default: Date.now
    // }
  },
  // {
  //   supplier: {
  //     type : mongoose.Schema.Types.ObjectId,
  //     ref: "supplier"
  //   }
  // },
  // {
  // categories : {
  //   name:{
  //     type:String,
  //     required: true
  //   },
  //   type: mongoose.Schema.Types.ObjectId
  // }
  // },
  {
    timestamps:true
  })
  
  
  // SCHEMA ==> MODEL ==> Query
  const Product = mongoose.model("Product",productSchema)

  module.exports = Product;