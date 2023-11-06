const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const animais = [];
const recintos = [];
let nextAnimalId = 1;
let visitantes = 0;
app.post('/animais', (req, res) => {
  const novoAnimal = req.body;
  animais.push(novoAnimal);
  nextAnimalId++;
  res.status(201).json(novoAnimal);
});

app.post('/recintos', (req, res) => {
  const novoRecinto = req.body;
  recintos.push(novoRecinto);
  res.status(201).json(novoRecinto);
});

app.post('/alimentar', (req, res) => {
  const { idAnimal, alimento } = req.body;
  const animal = animais.find((animal) => animal.idAnimal === idAnimal);
  animal.alimento = alimento;
  res.status(200).json(animal);
});

app.get('/receber-visitantes', (req, res) => {
  visitantes++;
  res.status(200).send('Visitante recebido');
});

const PORT = 0;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}!`);
});

module.exports = app;
