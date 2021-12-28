const express = require("express");

const login = require("../../models/login");

const router = express.Router();

const { DataTypes } = require("sequelize");

const sequelize = require("../../models/index").sequelize;

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const data = await login(sequelize, DataTypes).destroy({
    where: {
      id: id,
    },
  });
  res.json("data sudah dihapus");
});

module.exports = router;
