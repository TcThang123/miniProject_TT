const express = require("express")

const router = express.Router()

const {
    getAcounts,
    getOneAccount,
    createAccount,
    updateAccount,
    deleteAccount
} = require("../controllers/accountController")

router
.route("/")
.get(getAcounts)
.post(createAccount)

router
.route("/:id")
.get(getOneAccount)
.patch(updateAccount)
.delete(deleteAccount)

/* router.get("/", (req, res, next) => {
    res.send("Acc")
}) */

module.exports = router