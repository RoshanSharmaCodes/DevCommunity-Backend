const express = require("express")
const profileApp = express.Router()

profileApp.get("/:id",(req,res)=>{
    const Id = req.params.id 
    res.send("Profile Ready"+Id)
})

module.exports = profileApp;

