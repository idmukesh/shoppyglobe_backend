import { cartModel } from "../Model/productModel.js";
import jwt from "jsonwebtoken"
export const checkCartIdExistsOrNot = async (req, res, next) => {
    try {
        const { id } = req.body;
        const existItem = await cartModel.findOne({ id: id });

        if (existItem) {
            return res.status(409).json({ error: "Item with this ID already exists in the cart" });
        }
        next();
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error", message: err.message });
    }
};

export const checkJWT = (req, res, next) => {
    const authUser = req.header("Authorization");
    if (!authUser) {
        return res.status(404).json({ message: "Token does not exist can not login" })
    }
    const Token = authUser && authUser.split(' ')[1];
    jwt.verify(Token, "secretKey", (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Invalid JWT " })
        }
        req.user = decoded;
        next();
    })
}

export const checkUserLogin = (req, res, next) => {                 // this is not fetching actual data from database or localStorage
    const { userName, passWord } = req.user;
    if (!(userName == "mkmtraj" && passWord == 1111)) {
        return res.json("Your UserName and Password is Wrong")
    }
    next()
}

export const checkNewRegister = (req, res, next) => {
    const { userName, passWord } = req.body;
    if (!(userName && passWord)) {
        res.json({ message: "userName and password is must" })
    }
    next();
}
