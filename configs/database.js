const mongoose = require("mongoose")

module.exports = connectDB = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/crud")
        console.log("DB successfully connected")
    } catch(error) {
        console.log("DB Error: " + error.massage)
    }
}
