const mongoose = require('mongoose');
const Cotacao = mongoose.model('Cotacao');

module.exports = {
      async cadastrar(req, res) {
        const cotacao = await Cotacao.create(req.body);
        return res.json(cotacao);
      },
      async listar(req, res) {
        const cotacao = await Cotacao.find({});
        return res.json(cotacao);
      },
      async atualizar(req, res) {
        const cotacao = await cotacao.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        return res.json(user);
      },
      async deletar(req, res) {
        await cotacao.deleteOne({ _id: req.params.id });
        return res.json({
          message: "Excluido com sucesso!"
        });
      }
}