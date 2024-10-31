import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    ID_Product: {  
        type: String,
        required: true, 
    },
    Name: {
        type: String,
        required: true,
    },
    Bio: {
        type: String,
        required: true,
    },
    Brand: {
        type: String,
        required: true,
    },
    Price: {
        type: String,
        required: true,
    },
    Quantity: {
        type: String,
        required: true,
    },
    Size: {
        type: String,
        required: true,
    },
    Color: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    },
    // Status: {
    //     type: Boolean,
    //     required: true,
    // },
});

const ShoesModel = mongoose.model('Product', ProductSchema, 'Product');

export default ShoesModel;
