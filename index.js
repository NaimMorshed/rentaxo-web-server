require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const defaultRouter = require("./routes/default.routes");
const userRouter = require("./routes/users.routes");
const notFoundRouter = require("./routes/notFound.routes");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/", defaultRouter);
app.use("/users", userRouter);
app.use(notFoundRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
