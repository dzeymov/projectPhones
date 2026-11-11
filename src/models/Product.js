import mongoose from "mongoose";


const productShema = new mongoose.Schema({
    brand:{
        type:String,
        required:[true, "Название бренда не может быть пустой!"],
        trim:true
    },
    model:{
        type:String,
        required:[true, "Название модели не может быть пустой!"],
        trim:true
    },
    title:{
        type:String,
        required:[true, "Название товара не может быть пустой!"],
        trim:true
    },
    description:{
        type:String,
        required:[true, "Описание товара не может быть пустой!"],
        trim:true
    },
    price:{
        type:Number,
        required:[true, "Цена товара не может быть пустой!"],
        min:0
    },
    quantity:{
        type:Number,
        required:true,
        min:0,
        default:0
    },
    storage:{
        type:String,
        enum:["64GB", "128GB", "256GB", "512GB", "1TB" ] // 
    },
    color:{
        type:String,
        required:true,
        trim:true
    },
    specs:{
        screen:{type:String},
        camera:{type:String},
        battery:{type:String},
        os:{type:String},
        cpu:{type:String},
        ram:{type:String},
    },
    images:[{type:String}]
})

export default mongoose.model("Product", productShema)