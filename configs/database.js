const mongoose = require("mongoose")

module.exports = connectDB = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017")
        console.log("kết nối db thành công")
    } catch(error) {
        console.log("lỗi kết nối db: " + error.massage)
    }
}