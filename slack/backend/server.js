import express from 'express';

import {ENV} from './src/env.js'
const app = express();

app.get("/", (req, res) => {res.send("hello22")})

app.listen(ENV.PORT, ()=>{
    console.log("hellor wolrd",ENV.PORT)
})