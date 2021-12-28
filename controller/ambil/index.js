const express = require("express");

const login = require("../../models/login");

const router = express.Router();

const { DataTypes } = require("sequelize");

const sequelize = require("../../models/index").sequelize;

router.get("/ambil", async (req, res) => {
  const data = await login(sequelize, DataTypes).findAll({});
  res.json(data);
});

module.exports = router;
