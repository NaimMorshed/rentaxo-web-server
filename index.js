const { serverPort } = require("./secret");
const connectDB = require("./config/db");
const express = require("express");
const app = express();
const cors = require("cors");

const defaultRouter = require("./routes/default.routes");
const userRouter = require("./routes/users.routes");
const apartmentRouter = require("./routes/apartments.routes");
const documentsRoutes = require("./routes/document.routes");
const notFoundRouter = require("./routes/notFound.routes");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/", defaultRouter);
app.use("/users", userRouter);
app.use("/apartments", apartmentRouter);
app.use("/documents", documentsRoutes);
app.use(notFoundRouter);

app.listen(serverPort, async () => {
  console.log(`Server running at http://localhost:${serverPort}`);
  await connectDB();
});
