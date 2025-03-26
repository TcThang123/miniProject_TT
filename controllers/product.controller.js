const productModel = require("../models/product.model")

module.exports = {

    getProducts: assync(req, res, next)=>{
        const products = await productModel.find()
        return res.status().json(products)
    }

    createProduct: assync(req, res, next)=>{
        const body = req.body
        const newProduct = await productModel.create(body)
        return res.status().json(newProduct)
    }

    updateProduct: assync(req, res, next)=>{
        const id = req.params.id
        const body = req.body
        const updatedProduct = await productModel.findByIdAndUpdate(id, body, {new: true})
        return res.status().json(updatedProduct)
    }

    deleteProduct: assync(req, res, next)=>{
        const id = req.params.id
        const deletedProduct = await productModel.findByIdAndDelete(id)
        return res.status().json(deletedProduct)
    }
}