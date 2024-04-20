import productModel from "../models/productModel.js";

export const getAllContacts = async(req,res)=>{
    const query = req.query.query || "";
    try {
    const products = await productModel.find({
        $or: [
            { title: { $regex: query, $options: "i" } },
            { category: { $regex: query, $options: "i" } },
            { description: { $regex: query, $options: "i" } },
            // { price: {$gte: parseFloat(query)}} 
        ]},        
        {id : 1,title : 1,image:1,price : 1,description : 1,category : 1});
    // const productsCount = await productModel.countDocuments({
    //     title:{$regex:query,$options:"i"} || {category:{$regex:query,$options:"i"}}
    //   })
    res.status(200).json({products})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const postAllContacts = async(req,res)=>{
    try {
    const products = new productModel(req.body);
    await products.save();
    res.status(200).json(products)
    } catch (error) {
    res.status(500).json({message : error.message})
    }
}