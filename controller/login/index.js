const express = require("express");

const login = require("../../models/login");

const router = express.Router();

const { DataTypes } = require("sequelize");

const sequelize = require("../../models/index").sequelize;

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const data = await login(sequelize, DataTypes).findOne({
      where: {
        username: username,
      },
    });
    if (!data) {
      throw Error("Data tidak ditemukan");
    }
    const isVeryvied = await bcrypt.compare(password, data.password);
    console.log(isVeryvied);
    if (!isVeryvied) {
      throw Error("Password salah");
    }

    const payload = {
      Username: username,
      password: data.password,
    };
    const token = jwt.sign(payload, "ada");
    res.json({ username: data.username, data: data.password, token: token });
  } catch (err) {
    res.json({ msg: err.message });
  }
});

module.exports = router;
