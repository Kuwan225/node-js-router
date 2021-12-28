const express = require("express");
const app = express();

const router = express.Router();
app.use(express.json());

const autentiCation = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  const user = jwt.decode(token, process.env.TOKEN);
  console.log(user);
  if (!user) res.json({ message: process.env.ERROR });
  req.payload = user;
  next();
};

router.post("/daftar", autentiCation, async (req, res) => {
  try {
    const name = req.body.username;
    console.log(req.payload);
    res.json({ message: `Hallo, ${name}` });
  } catch (Error) {
    console.log(Error.errors[0].message);
    res.status(422).json({ message: Error.sqlMessage });
  }
});

module.exports = router;
