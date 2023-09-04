const express = require("express")
const loginApp = express.Router()

loginApp.get("/", (req,res)=>{
    const data = req.body
    const UserName = data.Username
    const Password = data.Password
    res.send("Logged In")
    
})

module.exports = loginApp;