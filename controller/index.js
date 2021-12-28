const express = require("express");

const route = express.Router();

const ambil = require("./controller/ambil/index");
const hapus = require("./controller/delete/index");
const create = require("./controller/create/index");
const Login = require("./controller/login/index");
const edit = require("./controller/edit/index");
const daftar = require("./controller/daftar/index");
const router = require("./ambil");

route.use(ambil);
route.use(hapus);
route.use(create);
route.use(Login);
route.use(edit);
route.use(daftar);

module.exports = router;
