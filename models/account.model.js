const { timeStamp } = require("console")
const mongoose = require("mongoose")

const accountSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        require : true,
        unique : true
    },
    address : {
        type : String
    },
    role : {
        type : String,
        default : "user"
    }
}, {
    versionKey : false,
    timeStamps : true
})

module.exports = mongoose.model("account", accountSchema)
