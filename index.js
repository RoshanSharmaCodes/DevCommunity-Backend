const express = require("express")
const cors = require("cors")

const App = express()

App.use(cors())


App.get("/", (req,res)=>{
    res.send("Dev Community Backend is Working")
})

App.get("/UserLogin", (req,res)=>{
    res.send("Working")
})

App.listen(3000, (req,res)=>{
    console.log("Server is Up and Running!")
})
