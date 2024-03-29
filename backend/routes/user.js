const express = require("express");
const { User, Account } = require("../db")
const zod = require("zod");
const jwt = require("jsonwebtoken")
const { JWT_Secret } = require("../config")
const userRouter = express.Router();
const { authMiddleware } = require("../middleware")

const signupbody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
});
const signinbody = zod.object({
    username: zod.string().email(),
    password: zod.string()
});
const updatebody = zod.object({
    password: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional()
});


userRouter.post("/signup", async (req, res) => {
    const { success } = signupbody.safeParse(req.body) // we can also do const success = signupSchema.safeparse(req.body).success
   
    const person = await User.findOne({
      username: req.body.username,
    });
    if (!success) {
      return res.status(411).json({
        msg: "Email already taken / Incorrect inputs",
      });
    }
  
    if (person) {
      return res.status(411).json({
        msg: "user already exists",
      });
    }
    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId
    }, JWT_Secret);

    res.json({
        message: "User created successfully",
        token: token
    })
})


userRouter.post("/signin", async(req, res) => {
    const {success} = signinbody.safeParse(req.body);
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
        }, JWT_Secret);
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
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = userRouter