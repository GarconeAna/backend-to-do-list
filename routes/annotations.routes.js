const express = require('express');
const router = express.Router();
const Annotation = require('../models/annotations');

router.get('/', async (req, res) => {
  // logica para listar
  await Annotation.find({})
  .then((annotation) => {
    res.status(200).send(annotation);
  })
  .catch((err) => {
    res.status(400).send("Algo errado. Tente novamente.");
    console.log(err);
  });
  // res.send('rota /');
});

router.post("/add", async (req, res) => {
  // logica para add
  await Annotation.create(req.body)
  .then(() => {
    res.status(200).send("Musica adicionada com sucesso");
  }).catch((err) => {
    res.status(400).send("Algo errado. Tente novamente.");
    console.log(err);
  });
  // res.send('rota add');
});

router.get("/findByName", async (req, res) => {
  // logica para lista por nome
  await Annotation.find({nome : req.params.body})
  .then((annotation) => {
    res.status(200).send(annotation);
  }).catch((err) => {
    res.status(400).send("Algo errado. Tente novamente.");
    console.log(err);
  });
  // res.send('rota listar por nome');
});

router.get("/findById/:id", async (req, res) => {
  // logica para lista por nome
  await Annotation.findOne({_id : req.params.id})
  .then((annotation) => {
    res.status(200).send(annotation);
  }).catch((err) => {
    res.status(400).send("Algo errado. Tente novamente.");
    console.log(err);
  });
  // res.send('rota listar por nome');
});

router.put("/update/:id", async (req, res) => {
  // logica para editar
  await Annotation.updateOne({_id : req.params.id},req.body)
  .then(() => {
    res.status(200).send("Atualizado com sucesso");
  }).catch((err) => {
    res.status(400).send("Algo errado. Tente novamente");
    console.log(err);
  });
  // res.send('rota update');
});


router.delete("/delete/:id", async (req, res) => {
  // logica para deletar
  await Annotation.deleteOne({_id : req.params.id})
  .then(() => {
    res.status(200).send("Deletado com sucesso");
  }).catch((err) => {
    res.status(400).send("Algo errado. Tente novamente");
    console.log(err);
  });
  // res.send('rota delete');
});


module.exports = router;