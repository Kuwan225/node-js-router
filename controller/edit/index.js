const express = require("express");

const router = express.Router();

const { DataTypes } = require("sequelize");

const sequelize = require("../../models/index").sequelize;

const login = require("../../models/login");

router.put("/update/:id", async function (req, res) {
  const id = req.params.id;
  const data = await login(sequelize, DataTypes).update(
    {
      username: req.body.username,
      password: req.body.password,
      fullname: req.body.fullname,
      occupation: req.body.occupation,
      maried: req.body.maried,
    },
    {
      where: {
        id: id,
      },
    }
  );
  res.json({ pesan: "Data berhasil di update" });
});

module.exports = router;
