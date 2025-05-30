const { timeStamp } = require("console")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const customerSchema = Schema({
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
    birthDate: {
        type: Date
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
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
    },
    status: {
        type: String,
        enum: ["draft", "active", "deleted"],
        default: "draft"
    },
    sale: [{
        type: Schema.Types.ObjectId,
        ref: "sale"
    }]
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("customer", customerSchema)