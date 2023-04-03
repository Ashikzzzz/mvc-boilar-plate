const Product = require('../models/Product')


exports.getProductServices = async() =>{
    const result = await Product.find({})
    return result
}

exports.createAproductService = async(data)=>{
     const result = await Product.create(data)
    return result
}