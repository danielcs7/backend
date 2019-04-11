const Box = require("../models/Box");

class BoxController {
  async store(req, res) {
    //const box = await Box.create({ title: "Rocketseat" });
    const box = await Box.create(req.body);

    return res.json(box);
  }

  async show(req, res) {
    //const box = await Box.create({ title: "Rocketseat" });
    const box = await Box.findById(req.params.id).populate({
      path: "files",
      //ordenação de forma decrecente
      option: { sorte: { createdAt: -1 } }
    });

    return res.json(box);
  }
}

module.exports = new BoxController();
