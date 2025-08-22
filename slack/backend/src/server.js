import express from "express";
import {ENV} from "../env.js"
import {connectDB} from "../db.js";
const app = express();

app.get("/", (req, res) => {
    res.send("index")
})

app.listen(ENV.PORT,()=>{
    console.log('server is on',ENV.PORT)
    connectDB()
    }
)