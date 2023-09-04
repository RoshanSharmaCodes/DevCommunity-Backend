const express = require("express")
const registerApp = express.Router()

registerApp.get("/",(req,res)=>{
    const data = req.body
    res.send("Registered")
})

module.exports = registerApp