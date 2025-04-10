const productModel = require("../models/productModel")

module.exports = {

    getProducts: async(req, res, next) => {
        const products = await productModel.find()
        return res.status().json(products)
    },

    getOnrProduct: async(req, res, next) => {
        const id = req.params.id
        const product = await productModel.findById(id)
        return res.status().json(product)
    },

    createProduct: async(req, res, next) => {
        const body = req.body
        const newProduct = await productModel.create(body)
        return res.status().json(newProduct)
    },

    updateProduct: async(req, res, next) => {
        const id = req.params.id
        const body = req.body
        const updatedProduct = await productModel.findByIdAndUpdate(id, body, {new: true})
        return res.status().json(updatedProduct)
    },

    deleteProduct: async(req, res, next) => {
        const id = req.params.id
        const deletedProduct = await productModel.findByIdAndDelete(id)
        return res.status().json(deletedProduct)
    }
}