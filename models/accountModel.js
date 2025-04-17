const { timeStamp } = require("console")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const accountSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        require: true,
        unique: true
    },
    address: {
        type: String
    },
    role: {
        type: String,
        default: "user"
    }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("account", accountSchema)
