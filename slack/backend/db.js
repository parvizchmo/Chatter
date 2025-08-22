import mongoose from "mongoose"
import {ENV} from "./env.js"

export const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(ENV.MONGO_DB_URI);
        console.log("Connected successfully",conn.connection.host);
    }catch(err){
        console.log(err)
    }
}