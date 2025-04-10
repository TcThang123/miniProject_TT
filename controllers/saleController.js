const saleModel = require("../models/saleModel")

module.exports = {

    getSales: async(req, res, next) => {
        try {
            const sales = await saleModel.find()
            if (!sales) return res.status(404).json({message: "Not Found"})
            return res.status(200).json(sales)
        } catch(err) {
            next(err)
        }
    },

    getOneSale: async(req, res, next) => {
        try {
            const id = req.params.id
            const sale = await saleModel.findById(id)
            if (!sale) return res.status(404).json({message : "Not Found"})
            return res.status(200).json(sale)
        } catch(err) {
            next(err)
        }
    },

    createSale: async(req, res, next) => {
        try {
            const body = req.body
            const newSale = await saleModel.create(body);
            return res.status(201).json(newSale)
        } catch(err) {
            next(err)
        }
    },

    updateSale: async(req, res, next) => {
        try {
            const id = req.params.id
            const body = req.body
            const updatedSale = await saleModel.findByIdAdnUpdate(id, body, {new: true})
            return res.status(200).json(updatedSale)
        } catch(err) {
            next(err)
        }
    },

    deleteSale: async(req, res, next) => {
        try {
            const id = req.params.id
            const deletedSale = await saleModel.findByIdAndDelete(id)
            return res.status(200).json(deletedSale)
        } catch(err) {
            next(err)
        }
    }
}