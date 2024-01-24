const express = require("express");
const { User, Account } = require("../db")
const zod = require("zod");
const jwt = require("jsonwebtoken")
const { JWT_secret } = require("../config")
const userRouter = express.Router();
const { authMiddleware } = require("../middleware")

const signupbody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string()
})
const signinbody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})
const updatebody = zod.object({
    password: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional()
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
    const userId = user._id;
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })
    const token = jwt.sign({
        userId
    }, JWT_secret);
    res.json({
        message: "User created successfully",
        token: token
    })
})


userRouter.post("/signin", async(req, res) => {
    const {success} = signinbody.safaparse(req.body);
    if(!success) {
        return res.status(411).json({
            message: "email already taken or incorrect inputs"
        })
    }
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });
    if(user) {
        const token = jwt.sign({
            userId : user._id
        }, JWT_secret);
        res.json({
            token:token
        })
        return;
    }
    res.status(411).json({
        message: "error while logging in"
    })
})


userRouter.put("/", authMiddleware, async(res, req) => {
    const { success } = updatebody.safeParse(req.body);
    if(!success) {
        res.status(411).json({
            message: "error while updating information"
        })
    }
    await User.updateOne(req.body, {
        id: req.userId
    })
    res.json({
        message: "updated successfully"
    })
})


userRouter.get("/bulk", async(req, res) => {
    const filter = req.query.filter || "";
    const users = await User.find({
        $or: [{
            firstname: {
                "$regex": filter
            }
        }, {
            lastname: {
                "$regex": filter
            }
        }]
    })
    res.json({
        user: users.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    })
})

module.exports = userRouter