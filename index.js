const express = require("express");
const app = express();
const { connection } = require("./config/db");
const { postRouter } = require("./routes/posts.routes");
require("dotenv").config();
const { userRouter } = require("./routes/users.routes");
const { auth } = require("./middleware/auth.middlware");

app.use(express.json());
app.use("/users", userRouter);
app.use(auth);
app.use("/posts", postRouter);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to Mongo Db");
  } catch (err) {
    console.log(err);
  }
  console.log(`Server is running at ${process.env.port}`);
});
