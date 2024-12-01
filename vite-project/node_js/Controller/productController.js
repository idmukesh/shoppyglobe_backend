import { ProductModel } from "../Model/productModel.js"
import { cartModel } from "../Model/productModel.js";
import jwt from 'jsonwebtoken'

export const getAllProduct = async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.json({ products }); // Correct way to send JSON response
    } catch (err) {
        res.status(500).json({ Error: "Failed to fetch" });
    }
};

export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await ProductModel.findById(id)
        res.send(response)
    }
    catch (err) {
        res.status(500).json({ message: "Failed to fetch by id" })
    }
}

export const addProductToCart = async (req, res) => {
    try {
        const product = req.body;
        const response = await cartModel.insertMany(product);
        res.send(response)
    }
    catch (err) {
        res.status(500).json({ message: "Failed to post data" })
    }
}


export const updateQuantityInCart = async (req, res) => {
    try {
        const id = req.params.id;
        const { quantity } = req.body;
        const updatedCartItem = await cartModel.findByIdAndUpdate(id, { quantity: quantity }, { new: true });

        if (!updatedCartItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }
        res.status(200).json(updatedCartItem);

    } catch (err) {
        res.status(500).json({ message: "Failed to update the stock quantity" });
    }
};

export const deleteCartItem = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await cartModel.findByIdAndDelete(id)
        if (!product) {
            return res.status(404).json({ message: "Cart item not found" })
        }
        res.status(200).json({ message: "Deleted Successfuly", product })
    }
    catch (err) {
        res.status(500).json({ message: "Failed to Delete the cart item" });
    }
}

export const getAllCartItem = async (req, res) => {
    try {
        const cartItems = await cartModel.find();
        if (!cartItems) {
            return res.status(404).json({ message: "Cart Items not found" })
        }
        res.send(cartItems)
    }
    catch (err) {
        res.status(500).json({ message: "Failed to Fetch cart item" });
    }
}

export const newUserRegister = async (req, res) => {
    const { userName, passWord } = req.body;

    // creating jwt token
    const accessToken = jwt.sign({ userName, passWord }, "secretKey");
    res.send(accessToken)
}