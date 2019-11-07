const mongoose = require('mongoose');
const Comercio = mongoose.model('Comercio');

module.exports = {
      async cadastrar(req, res) {
        const comercio = await Comercio.create(req.body);
        return res.json(comercio);
      },
      async listar(req, res) {
        const comercio = await Comercio.find({});
        return res.json(comercio);
      },
      async atualizar(req, res) {
        const comercio = await comercio.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        return res.json(user);
      },
      async deletar(req, res) {
        await comercio.deleteOne({ _id: req.params.id });
        return res.json({
          message: "Excluido com sucesso!"
        });
      }
}