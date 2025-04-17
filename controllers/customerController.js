const customerModel = require("../models/customerModel")

module.exports = {

    getCustomers: async(req, res, next) => {
        try {
            const customers = await customerModel.find()
            if (!customers) return res.status(404).json({message: "Not Found"})
            return res.status(200).json(customers)
        } catch(err) {
            next(err)
        }
    },

    getOneCustomer: async(req, res, next) => {
        try {
            const id = req.params.id
            const customer = await customerModel.findById(id)
            if (!customer) return res.status(404).json({message: "Not Found"})
            return res.status(200).json(customer)
        } catch(err) {
            next(err)
        }
    },

    createCustomer: async(req, res, next) => {
        try {
            const body = req.body
            const newCustomer = await customerModel.create(body)
            return res.status(201).json(newCustomer)
        } catch(err) {
            next(err)
        }
    },

    updateCustomer: async(req, res, next) => {
        try {
            const id = req.params.id
            const body = req.body
            const updatedCustomer = await customerModel.findByIdAndUpdate(id, body, {new: true})
            return res.status(200).json(updatedCustomer)
        } catch(err) {
            next(err)
        }
    },

    deleteCustomer: async(req, res, next) => {
        try {
            const id = req.params.id
            const deletedCustomer = await customerModel.findByIdAndDelete(id)
            return res.status(200).json(deletedCustomer)
        } catch(err) {
            next(err)
        }
    }
}