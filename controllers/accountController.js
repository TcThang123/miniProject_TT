const accountModel = require("../models/accountModel")

module.exports = {

    getAcounts: async(req, res, next) => {
        try {
            const accounts = await accountModel.find()
            if (!accounts) return res.status(404).json({message: "Not Found"})
            return res.status(200).json(accounts)
        } catch (err) {
            next(err)
        }
    },

    getOneAccount: async(req, res, next) => {
        try {
            const id = req.params.id
            const account = await accountModel.findById(id)
            if (!account) return res.status(404).json({message: "Not Found"})
            return res.status(200).json(account)
        } catch (err) {
            next(err)
        }
    },

    createAccount: async(req, res, next) => {
        try {
            const body = req.body
            const newAccount = await accountModel.create(body)
            return res.status(201).json(newAccount)
        } catch (err) {
            next(err)
        }
    },

    updateAccount: async(req, res, next) => {
        try {
            const id = req.params.id
            const body = req.body
            const updatedAccount = await accountModel.findByIdAndUpdate(id, body, {new: true})
            return res.status(200).json(updatedAccount)
        } catch (err) {
            nect(err)
        }
    },

    deleteAccount: async(req, res, next) => {
        try {
            const id = req.params.id
            const deletedAccount = await accountModel.findByIdAndDelete(id)
            return res.status(200).json(deletedAccount)
        } catch (err) {
            next(err)
        }
    }
}
