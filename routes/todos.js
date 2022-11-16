// File ini digunakan untuk membuat API method bersama controller
const express = require("express");
const router = express();

let listMahasiswa = [];

router.post("/todos", (req, res) => {
  listMahasiswa = [...listMahasiswa, { id: Math.random(), ...req.body }];

  return res.status(200).json({ message: "Berhasil menambahkan user!" });
});

router.get("/todos", (req, res) => {
  return res.status(200).json({ value: listMahasiswa });
});

router.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const findIndex = listMahasiswa.findIndex((val) => val.id === id);
  listMahasiswa.splice(findIndex, 1);

  return res.status(200).json({ message: "Berhasil menghapus mahasiswa!" });
});

module.exports = router;
