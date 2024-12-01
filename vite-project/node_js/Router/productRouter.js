import express from 'express'
import { checkCartIdExistsOrNot, checkJWT, checkNewRegister } from '../Middlewares/cartMiddleware.js';
import { getAllProduct, getProductById, addProductToCart, updateQuantityInCart, deleteCartItem, getAllCartItem, newUserRegister } from '../Controller/productController.js'

const route = express.Router();

route.get("/api/products", getAllProduct)
route.get("/api/products/:id", getProductById)
route.post("/api/carts", checkCartIdExistsOrNot, addProductToCart)
route.put("/api/carts/:id", updateQuantityInCart)
route.delete("/api/carts/:id", deleteCartItem)
route.post("/api/Register", checkNewRegister, newUserRegister)
route.get("/api/Login", checkJWT, getAllCartItem)

export default route;