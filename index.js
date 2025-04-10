const express = require("express")
const app = express()
const connectDB = require("./configs/database")
const accountRouter = require("./routers/accountRouter")


app.use(express.json())
app.use(express.urlencoded({extended: true}))

connectDB();

//const routers = require("./routers")
//routers(app)

app.use("/api/accounts", accountRouter)


app.listen(5000, () => {
    console.log("Sever run at port 5000");
})

app.use((err, req, res, next) => {
    console.error("Error: ", err.message)
    res.status(500).json({error: "Internal Server Error"})
})

process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection:", reason);
})