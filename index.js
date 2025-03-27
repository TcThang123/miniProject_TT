const express = require("express")
const app = express()
const connectDB = require("./configs/database")
//const routers = require("./routers")
const accountRouter = require("./routers/account.router")


app.use(express.json())
app.use(express.urlencoded({extended: true}))

connectDB();
//console.log("123");
//routers(app)
app.use("/api/accounts", accountRouter)


app.listen(5000, () => {
    console.log("sever run at port 5000");
})