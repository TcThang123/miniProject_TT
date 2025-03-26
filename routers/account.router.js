const express = require("express")

const router = express.Router()

const {
    getAcounts,
    createAccount,
    updateAccount,
    deleteAccount
} = require("../controllers/account.controller")

router
.route("/")
.get(getAcounts)
.post(createAccount)

router
.route("/:id")
.patch(updateAccount)
.delete(deleteAccount)

module.exports = router