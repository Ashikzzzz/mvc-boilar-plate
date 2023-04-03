const express = require("express");
const { getAllProduct, saveAproduct, updateAproduct } = require("../controller/product.controller");
const router = express.Router()

router.route('/')
.get(getAllProduct)
.post(saveAproduct)

router.route('/:id')
.patch(updateAproduct)

module.exports = router;