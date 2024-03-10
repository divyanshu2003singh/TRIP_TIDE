const express = require("express");
const userRouter = require("./Router/userRouter");
const cors =  require("cors");
const commonRouter = require("./Router/commonRouter");
const rideRouter = require("./Router/rideRouter");
require("dotenv").config();

const port = process.env.PORT || 5080


const app =express()
app.use(cors())
app.use(express.json())

app.use("/api/user", userRouter);
app.use("/api/common", commonRouter);
app.use("/api/ride", rideRouter)



app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
})
