const express = require("express")
const cors = require("cors")
const loginApp = require("./Routes/Authentication/login")
const registerApp = require("./Routes/Authentication/register")
const profileApp = require("./Routes/Authentication/getProfile")

const App = express()

App.use(cors())
App.use(express.urlencoded({ extended: true }));
App.use(express.json());

App.use("/login",loginApp)

App.use("/register",registerApp)

App.use("/profile",profileApp)

App.get("/", (req,res)=>{
    res.send("Dev Community Backend is Working")
})

App.listen(3000, ()=>{
    console.log("Server is Up and Running!")
})
