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

const customerController = require("../controllers/customerController")
const upload = require("../middlewares/upload")
//const multer = require("multer")
//const upload = multer({ dest: 'uploads/' })

router.post("/import", upload.single("file"), customerController.importCustomers)

module.exports = router