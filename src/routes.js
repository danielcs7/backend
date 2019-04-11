const express = require("express");
const multer = require("multer");
const routes = express.Router();
const multerConfig = require("./config/multer");

const BoxController = require("./controllers/BoxController");
const FileController = require("./controllers/FileController");

routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);

//single => significa se quero enviar um unico arquivo
//ou varios arquivos, se fosse varios arquivos, ao inves
//de colocar single() colocaria []
routes.post(
  "/boxes/:id/files",
  multer(multerConfig).single("file"),
  FileController.store
);

module.exports = routes;
