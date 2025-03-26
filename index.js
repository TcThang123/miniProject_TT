const express = require("express")
const app = express()
const connectDB = require("./configs/database")
const routers = require("./routers")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

connectDB();
routers(app)

app.listen(5000, ()=>{
    console.log("sever run at port 5000");
})