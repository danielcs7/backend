const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors);

const server = require("http").Server(app);
const io = require("socket.io")(server);

//conexao em tempo real socket
io.on("connection", socket => {
  console.log("ok");
  socket.on("connectRoom", box => {
    socket.join(box);
  });
});

mongoose.connect(
  "mongodb+srv://react:react@cluster0-da4wr.mongodb.net/omnistack?retryWrites=true",
  {
    useNewUrlParser: true
  }
);

//middleware
app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.use(require("./routes"));

//para reconhecer o horuku
server.listen(process.env.PORT || 3000);
