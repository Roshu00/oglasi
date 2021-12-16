const dbSetup = require("./db/db-setup");
const express = require("express");
const cookieParser = require("cookie-parser");
const router = require("./routes/index");
const dotenv = require("dotenv");
const cors = require("cors");
const csrf = require("csurf");

dotenv.config();

const csrfProtection = csrf({
  cookie: true,
});

dbSetup();

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
//app.use(csrfProtection)
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3001, () => {
  console.log("server running on port 3001");
});
