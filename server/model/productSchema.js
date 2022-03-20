import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: { type: Object, required: true },
    price: { type: Object, required: true },
    description: { type: Object, required: true },
    discount: String,
    tagline: String,
});

const products = mongoose.model('product', productSchema);
export default products;