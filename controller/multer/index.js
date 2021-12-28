const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname + "/storage"),
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(".");
    const second = fileName.pop();

    const fullName = "Marwan Maulana";
    const firstLetter = fullName.match(/M/);
    const secondLetter = fullName.match(/M/);
    console.log(file);

    cb(
      null,
      fullName +
        "-" +
        fileName +
        "-" +
        Date.now() +
        "-" +
        firstLetter +
        secondLetter +
        "." +
        second
    );
  },
});
console.log(path.join(__dirname + "/storage"), "<<<<<<<<<<<< disini");
const upload = multer({ storage: storage });

app.get("/multer", upload.single("file"), async (req, res) => {
  res.status(200).json({
    data: req.file,
  });
});
