const accountModel = require("../models/account.model")

module.exports = {
 
    getAcounts: async(req, res, next) => {
        const accounts = await accountModel.find()
        return res.status(200).json(accounts)
    },

    /*
    getOneAccount: assync(req, res, next) => {
        const id = req.params.id
        const account = await accountModel.findById(id)
        return res.status(200).json(account)
    },
    */

    createAccount: async(req, res, next) => {
        const body = req.body
        const newAccount = await accountModel.create(body)
        return res.status(201).json(newAccount)
    },

    updateAccount: async(req, res, next) => {
        const id = req.params.id
        const body = req.body
        const updatedAccount = await accountModel.findByIdAndUpdate(id, body, {new: true})
        return res.status(200).json(updatedAccount)
    },

    deleteAccount: async(req, res, next) => {
        const id = req.params.id
        const deletedAccount = await accountModel.findByIdAndDelete(id)
        return res.status(200).json(deletedAccount)
    }
}