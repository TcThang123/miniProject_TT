const express = require("express")

const router = express.router()

const {
    getAcounts,
    createAccount,
    updateAccount
} = require("../controllers/account.controller")

router
.router("/")
.get(getAcounts)
.post(createAccount)

router
.route("/:id")

module.exports = router