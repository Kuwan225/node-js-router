require("dotenv").config();
const express = require("express");
const app = express();
const ambil = require("./controller/ambil/index");
const hapus = require("./controller/delete/index");
const create = require("./controller/create/index");
const Login = require("./controller/login/index");
const edit = require("./controller/edit/index");
const daftar = require("./controller/daftar/index");

app.use(ambil);
app.use(hapus);
app.use(create);
app.use(Login);
app.use(edit);
app.use(daftar);

app.listen(process.env.PORT, () =>
  console.log("Listening at port: " + process.env.PORT)
);
