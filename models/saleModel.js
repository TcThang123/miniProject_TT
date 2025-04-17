const { timeStamp } = require("console")
const mongoose = require("mongoose")
const { version } = require("os")
const Schema = mongoose.Schema

const saleSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true
    },
    phoneNumber: [{
        type: String,
        trim: true
    }],
    address: [{
        type: String,
        trim: true
    }],
    project: {
        type: Schema.Types.ObjectId,
        ref: "projectModel"
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("sale", saleSchema)