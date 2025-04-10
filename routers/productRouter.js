const express = require("express")

const router = express.Router()

const {
    getProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController")

router
.route("/")
.get(getProducts)
.post(createProduct)

router
.route("/:id")
.get(getOneProduct)
.patch(updateProduct)
.delete(deleteProduct)

module.exports = router