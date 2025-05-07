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
    phoneNumbers: [{
        type: String,
        trim: true
    }],
    addresses: [{
        type: String,
        trim: true
    }],
    project: {
        type: Schema.Types.ObjectId,
        ref: "project"
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("sale", saleSchema)