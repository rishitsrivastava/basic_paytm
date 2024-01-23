const express = require("express");
const app = express();
const { User } = require("../db")
const zod = require("zod");
const jwt = require("jsonwebtoken")
const { JWT_secret } = require("../config")

const userRouter = express.Router();

const signupbody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string()
})

userRouter.post("/signup", async (req, res) => {
    const { success } = signupbody.safeParse(req.body);
    if(!success) {
        return res.status(411).json({
            message: "Email already taken or Incorrect inputs"
        })
    }
    const existingUser = await User.findOne({
        username: req.body.username
    })
    if(existingUser) {
        return res.status(411).json({
            message: "Email already taken or incorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.usename,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })
    const userID = user._id;
    const token = jwt.sign({
        userID
    }, JWT_secret);
    res.json({
        message: "User created successfully",
        token: token
    })
})

userRouter.post("/signin", async(req, res) => {
    
})

module.exports = {
    userRouter
}