const { getProductServices, createAproductService } = require("../services/product.service")

exports.getAllProduct= async(req, res, next)=>{
    try {
      // getting all data 
      const products = await getProductServices()
      // query by any property
      // const products = await Product.find({status : {$eq : "out-of-stock"}})
      // projection
      // const products = await Product.find({}, "name, quantity")
  
      // or use where chain 
  
    //   const products = await Product.where("name").equals("chal").where("quantity").gt(100)
  
      res.status(200).json({
        success : true,
        message:"data getting success" ,
        data : products
      })
    } 
    catch (error) {
      res.send(400).status({success: false, message: "Its not working"})
    }
  }

  exports.saveAproduct=async(req, res, next)=>{
    try {
     
      const result= await createAproductService(req.body)
    
      res.status(200).json({
        success : true,
        message:"data inserted",
        data : result
      })
    } 
    catch (error) {
     res.send(400).status({success: false, message: "Its not working"})
    }
   }

   exports.updateAproduct = async(req, res, next)=>{
    try {
        
    }
     catch (error) {
        res.send(400).status({success: false, message: "Its not working"})
    }
   }