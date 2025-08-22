import express from "express";
import {ENV} from "../env.js"
import {connectDB} from "../db.js";
import {clerkMiddleware} from "@clerk/express";
import {serve} from "inngest/express"

const app = express();

app.use(clerkMiddleware()) //req.auth will be available in the req object

app.use(express.json())

app.use("api/inngest",serve({client:inngest,functions}))

app.get("/", (req, res) => {
    res.send("index")
})

const startServer = async() =>{
    try{
        await connectDB()
        if(ENV.NODE_ENV!=="production"){
            app.listen(ENV.PORT,()=>{
                    console.log('server is on',ENV.PORT)
                    connectDB()
                }
            )
        }
    }catch (e) {
        console.error(e)
        process.exit(1)
    }
}
startServer();

export default app