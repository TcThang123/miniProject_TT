const saleModel = require("../models/saleModel")

module.exports = {

    getSales: async(req, res, next) => {
        try {
            const sales = await saleModel.find().populate('project', 'name description')
            if (!sales) return res.status(404).json({ message: "Not Found" })
            return res.status(200).json(sales)
        } catch(err) {
            next(err)
        }
    },

    getOneSale: async(req, res, next) => {
        try {
            const id = req.params.id
            const sale = await saleModel.findById(id).populate('project', 'name description')
            if (!sale) return res.status(404).json({ message : "Not Found" })
            return res.status(200).json(sale)
        } catch(err) {
            next(err)
        }
    },

    createSale: async(req, res, next) => {
        try {
            const body = req.body
            const newSale = await saleModel.create(body)
            return res.status(201).json(newSale)
        } catch(err) {
            next(err)
        }
    },

    updateSale: async(req, res, next) => {
        try {
            const id = req.params.id
            const body = req.body
            const updatedSale = await saleModel.findByIdAndUpdate(id, body, { new: true }).populate('project', 'name description')
            return res.status(200).json(updatedSale)
        } catch(err) {
            next(err)
        }
    },

    deleteSale: async(req, res, next) => {
        try {
            const id = req.params.id
            const deletedSale = await saleModel.findByIdAndDelete(id).populate('project', 'name description')
            return res.status(200).json(deletedSale)
        } catch(err) {
            next(err)
        }
    },

    addPhoneNumber: async(req, res, next) => {
        try {
            const id = req.params.id
            const phoneNumber = req.body.phoneNumbers
            const updatedSale = await saleModel.findByIdAndUpdate(
                id, 
                { $addToSet: { phoneNumbers: phoneNumber } },
                { new: true }
            ).populate('project', 'name description')
            if (!updatedSale) return res.status(404).json({ message: "Not found" })
            return res.status(200).json(updatedSale)
        } catch(err) {
            next(err)
        }
    },

    removePhoneNumber: async(req, res, next) => {
        try {
            const id = req.params.id
            const phoneNumber = req.body.phoneNumbers
            const updatedSale = await saleModel.findByIdAndUpdate(
                id, 
                { $pull: { phoneNumbers: phoneNumber } },
                { new: true }
            ).populate('project', 'name description')
            if (!updatedSale) return res.status(404).json({ message: "Not found" })
            return res.status(200).json(updatedSale)
        } catch(err) {
            next(err)
        }
    }
}