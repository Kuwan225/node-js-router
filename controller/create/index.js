const express = require("express");

const login = require("../../models/login");

const router = express.Router();

const { DataTypes } = require("sequelize");

const sequelize = require("../../models/index").sequelize;

const bcrypt = require("bcrypt");

router.post("/create", async (req, res) => {
  const saltRound = 10;
  const password = req.body.password;
  const hashPassword = await bcrypt.hash(password, saltRound);
  console.log(hashPassword, "ini yang udah di hash");
  try {
    const data = await login(sequelize, DataTypes).create({
      username: req.body.username,
      password: hashPassword,
      fullname: req.body.fullname,
      occupation: req.body.occupation,
      maried: req.body.maried,
    });
    res.json(data);
  } catch (Error) {
    console.log(Error.errors[0].message);
    res.status(422).json({ message: Error.sqlMessage });
  }
});

module.exports = router;
