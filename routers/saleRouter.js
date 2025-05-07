const express = require("express")
const router = express.Router()

const {
    getSales,
    getOneSale,
    createSale,
    updateSale,
    deleteSale
} = require("../controllers/saleController")

router
.route("/")
.get(getSales)
.post(createSale)

router
.route("/:id")
.get(getOneSale)
.patch(updateSale)
.delete(deleteSale)

const saleController = require("../controllers/saleController")

router.post("/:id/phoneNumbers/add", saleController.addPhoneNumber)
router.delete("/:id/phoneNumbers/remove", saleController.removePhoneNumber)

module.exports = router