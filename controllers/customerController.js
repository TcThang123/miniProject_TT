const customerModel = require("../models/customerModel")
const fs = require("fs")
const path = require("path")

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
    },

    exportCustomers: async(req, res, next) => {
        try {
            const { minAge = 0, maxAge = 120, gender = 'all', createdFrom, createdTo} = req.body
            const today = new Date()
            const fromBirthDate = new Date(today.getFullYear() - maxAge, today.getMonth(), today.getDate())
            const toBirthDate  = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate())
            const filter = {}
            //filter gender
            if (gender !== 'all') {
                filter.gender = gender
            }
            //filter age range
            filter.birthDate = { $gte: fromBirthDate, $lte: toBirthDate }
            //filter date range
            if (createdFrom && createdTo) {
                filter.createdAt = { $gte: new Date(createdFrom), $lte: new Date(createdTo) }
            }
            console.log(filter)

            const customers = await customerModel.find(filter).populate('project sale', 'name description phoneNumbers')
            const filePath = path.join(__dirname, "../exports/customers_export.json")
            fs.writeFileSync(filePath, JSON.stringify(customers, null, 2))
            res.download(filePath, "customer_export.json")
            
        } catch (err) {
            next(err)
        }
    }
}