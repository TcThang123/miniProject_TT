const accountRouter = require("./account.router")

module.export =  (app)=>{
    app.use("/api/accounts", accountRouter)
}