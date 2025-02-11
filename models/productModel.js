import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    id : {type : Number,required:true},
    title : {type : String,required:true},
    price : {type : Number,required:true},
    description : {type : String,required:true},
    category: {type : String,required:true},
    image : {type : String,required:true}
})

const productModel = mongoose.model("products",ProductSchema);
export default productModel;