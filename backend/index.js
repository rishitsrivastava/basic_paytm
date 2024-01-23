const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken")
const PORT = 3000;

app.use(cors());
app.use(express.json());
const app = express();

const mainRouter = require("./routes/index");


app.use("/api/v1", mainRouter);





app.listen(PORT);








// /api/v1/user/signup
// /api/v1/user/signin
// /api/v1/user/changePassword ....

// /api/v1/account/transferMoney
// /api/v1/account/balance