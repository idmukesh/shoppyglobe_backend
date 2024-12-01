import mongoose from 'mongoose';

// Define the schema for the Product model
const productSchema = new mongoose.Schema({
  id: { type: Number },
  title: { type: String, required: true },  // Required
  description: { type: String, required: true },  // Required
  category: { type: String, required: true },  // Required
  price: { type: Number, required: true },  // Required
  images: [{ type: String, required: true }],  // Required
  discountPercentage: { type: Number },
  rating: { type: Number },
  stock: { type: Number, required: true },
  warrantyInformation: { type: String },
  shippingInformation: { type: String },
});

// Create the model using the schema
export const ProductModel = mongoose.model('Product', productSchema);

const cartItemSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },  // Required
  price: { type: Number, required: true },  // Required
  description: { type: String, required: true },  // Required
  quantity: { type: Number, required: true },
  category: { type: String, required: true },
  images: { type: String, required: true }
})

export const cartModel = mongoose.model("CartItem", cartItemSchema)