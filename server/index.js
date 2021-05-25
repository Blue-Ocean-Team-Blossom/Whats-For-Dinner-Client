/* eslint-disable */
const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

const { autocompleteIngredient } = require('./spoonacularSample');

const sampleUserId = 1; // CMD + F --> "Fix to add userId later"
// This needs to go away later later. This is the exact comment text, just search it.

const uri = 'http://3.135.209.178';

app.get('/RecipesByPantry', (req, res) => {
  axios.get(`${uri}/recipes/pantry?id=1`)
    .then((success) => {
      res.send(success.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/Recipe/:id', (req, res) => {
  axios.get(`${uri}/recipes/${req.params.id}`)
    .then((success) => {
      res.send(success.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get(`/pantry`, (req, res) => {
  axios.get(`${uri}/pantry?id=1`)
    .then(results => {
      res.send(results.data)
    })
    .catch(err => {
      res.send(err)
    })
});

app.delete(`/pantry`, (req, res) => {
  axios.delete(`${uri}/pantry`, {data: req.body})
    .then(results => {
      res.send(results.data)
    })
    .catch(err => {
      res.send(err)
    })
});

app.put(`/pantry`, (req, res) => {
  axios.put(`${uri}/pantry`, req.body)
  .then(results => {
    res.send(results.data)
  })
  .catch(err => {
    res.send(err)
  })
})

app.post('/pantry/autocomplete', (req, res) => {
  const { value } = req.body;
  axios.get(`${uri}/ingredients?query=${value}`)
    .then((ingredients) => {
      const { data } = ingredients;
      const parse = data.map((ingredient) => {
        const { name, id } = ingredient;
        const singleParse = { name, id };
        return singleParse;
      });
      res.status(200).send(parse);
    })
    .catch((err) => {
      res.status(500).send();
      console.log(`unable to get autocomplete ingredients, ${err}`);
    });
});

app.post('/pantry', (req, res) => {
  const { itemData, quantity } = req.body; // Fix to add userId later
  const userId = sampleUserId; // get rid of this later
  const { name, id } = itemData;
  const parse = {
    ingredient: name,
    ingredientId: id,
    quantity: Number(quantity),
  };
  axios({
    method: 'post',
    url: `${uri}/pantry`,
    data: parse,
  })
    .then((response) => {
      console.log('successful post to pantry');
      res.status(201).send();
      res.end();
    })
    .catch((err) => {
      res.status(404).send();
      console.log(`error posting to pantry, ${err}`);
    });
});


app.get('/ingredients', (req, res) => {
  let query = req.query.query;
  axios.get(`http://3.135.209.178/ingredients?query=${query}`)
    .then((success) => {
      console.log(success.data);
      res.send(success.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/filteredRecipes', (req, res) => {
  let ingredients = req.query.ingredients;
  axios.get(`http://3.135.209.178/recipes?ingredients=${ingredients}`)
    .then((success) => {
      res.send(success.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`listening on port ${port}`);
});
