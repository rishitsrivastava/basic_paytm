const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));

const mainRouter = require("./routes/index");

app.use("/api/v1", mainRouter);

app.listen(PORT, () => {
    console.log("server started")
});
