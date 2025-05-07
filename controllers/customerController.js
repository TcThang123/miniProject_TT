const customerModel = require("../models/customerModel")
const fs = require("fs")

module.exports = {

    getCustomers: async(req, res, next) => {
        try {
            const customers = await customerModel.find().populate('project sale', 'name description phoneNumbers')
            if (!customers) return res.status(404).json({message: "Not Found"})
            return res.status(200).json(customers)
        } catch(err) {
            next(err)
        }
    },

    getOneCustomer: async(req, res, next) => {
        try {
            const id = req.params.id
            const customer = await customerModel.findById(id).populate('project sale', 'name description phoneNumbers')
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
            const updatedCustomer = await customerModel.findByIdAndUpdate(id, body, {new: true}).populate('project sale', 'name description phoneNumbers')
            return res.status(200).json(updatedCustomer)
        } catch(err) {
            next(err)
        }
    },

    deleteCustomer: async(req, res, next) => {
        try {
            const id = req.params.id
            const deletedCustomer = await customerModel.findByIdAndDelete(id).populate('project sale', 'name description phoneNumbers')
            return res.status(200).json(deletedCustomer)
        } catch(err) {
            next(err)
        }
    },

    importCustomers: async(req, res, next) => {
        try {
            const filePath = req.file.path
            const data = fs.readFileSync(filePath, "utf-8")
            const customers = JSON.parse(data)
            if (!Array.isArray(customers)) {
                return res.status(400).json({ message: "Không hợp lệ"})
            }
            const result = await customerModel.insertMany(customers)
            res.status(201).json({ 
                message: `Đã import ${result.length} khách hàng thành công.`,
                data: result
            })
        } catch(err) {
            next(err)
        }
    }
}