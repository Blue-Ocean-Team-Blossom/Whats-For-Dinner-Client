const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

const sampleData = require('./samplePantry');
const { autocompleteIngredient } = require('./spoonacularSample');

app.get('/pantry', (req, res) => {
  pantry = sampleData.samplePantry;
  res.status(200).send(pantry);
});

app.get('pantry/form', (req, res) => {
  const ingredients = autocompleteIngredient;
  console.log(ingredients);
  res.status(200).send(ingredients);
});

app.post('pantry', (req, res) => {
  const ingredient = req.body;

});

app.delete('/pantry/*', (req, res) => {

});

app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`listening on port ${port}`);
});
