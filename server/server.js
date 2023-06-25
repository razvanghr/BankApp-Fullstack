const express = require("express");
const cors = require("cors");
const db = require("./database/database.js");
const usserAccountRouter = require("./routes/ussersAccount.js");
const usserAccountOptions = require("./routes/otionsAccount.js");

const app = express();
app.use(cors());
app.use(express.json());

// ---- UserAccountRouter
app.use("/user", usserAccountRouter);

//----- UserAccountOptions

app.use("/api", usserAccountOptions);

const PORT = 3000;

db.connect((error) => {
  if (error) console.log(error);
  else console.log("Connected to db");
});

app.get("/", (req, res) => {
  res.send("Hello from main");
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
