const { timeStamp } = require("console")
const mongoose = require("mongoose")
const { type } = require("os")

const projectSchema = mongoose.Schema({
    projectName: {
        type: String,
        required: true,
        unique: true,
    },
    projectDescription: {
        type: String
    },
    projectSale: {
        type: String,
        required: true
    },
    projectStatus: {
        type: String,
        enum: ["draft", "active", "deleted"]
    },
    projectCreatedAt: {
        type: Date,
        //default: Date.now
    },
    projectUpdatedAt: {
        type: Date,
        //default: Date.now
    }
})

module.exports = mongoose.model("project", projectSchema)