const mongoose = require('mongoose');

const annotationModel = new mongoose.Schema({
  titulo: { type: String, require: true },
  descricao: { type: String, require: true },
  prioridade: { type: String, required: true },
  situacao: { type: String, require: true },
  prazo: { type: Date, required: true },
  dataCriacao: { type: Date, default: Date.now }
});

const Annotation = mongoose.model("annotations", annotationModel);

module.exports = Annotation;