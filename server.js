import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import productRouter from "./routes/productRouter.js"

dotenv.config();
const app = express();
const port = process.env.PORT;
const DB = process.env.MONGO;

app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(cors());

app.use("/api/products",productRouter);

mongoose.connect(DB).then(()=>{
    console.log("Database_Connected");
}).catch((e)=>{
    console.log(e);
})

app.listen(port,(e)=>{
    if(e){
        console.log(e);
    }else{
        console.log(`Server on port ${port}`);
    }
})

