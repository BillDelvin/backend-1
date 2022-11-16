const express = require("express");
const router = express();

// file ini digunakan untuk membuat HTTPs method untuk API

// for create
router.post("/todos", (req, res) => {
  console.log(req.body);

  //   console.log(req.query);

  // jika aku sudah berhasil insert record

  return res.status(200).json({
    message: "User berhasil di tambah!!",
    data: {
      title: "this is from req.query",
      value: req.query,
    },
  });
});

// for update
router.post("/todos/:id", (req, res) => {
  console.log(req.params);
});

module.exports = router;
