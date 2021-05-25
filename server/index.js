const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/RecipesByPantry', (req, res) => {
  axios.get('http://3.135.209.178/recipes/pantry?id=1')
    .then((success) => {
      res.send(success.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/Recipe/:id', (req, res) => {
  axios.get(`http://3.135.209.178/recipes/${req.params.id}`)
    .then((success) => {
      res.send(success.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

const port = 5000;

const sampleData = require('./samplePantry');

app.get('/pantry', (req, res) => {
  pantry = sampleData.samplePantry;
  res.status(200).send(pantry);
});

app.delete('/pantry/*', (req, res) => {

});

app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`listening on port ${port}`);
});
