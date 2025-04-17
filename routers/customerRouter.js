const express = require("express")

const router = express.Router()

const {
    getCustomers,
    getOneCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer
} = require("../controllers/customerController")

router
.route("/")
.get(getCustomers)
.post(createCustomer)

router
.route("/:id")
.get(getOneCustomer)
.patch(updateCustomer)
.delete(deleteCustomer)

module.exports = router