const { timeStamp } = require("console")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const projectSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "sale"
    },
    status: {
        type: String,
        enum: ["draft", "active", "deleted"],
        default: "draft"
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("project", projectSchema)