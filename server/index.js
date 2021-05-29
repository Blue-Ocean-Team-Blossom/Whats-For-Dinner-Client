const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;
const uri = process.env.API_IP_ADDRESS;

// RECIPES
app.get('/RecipesByPantry', (req, res) => {
  const { token } = req.query;
  axios.get(`${uri}/recipes/pantry`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  })
    .then((success) => {
      res.send(success.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/Recipe/:id', (req, res) => {
  const { token } = req.query;
  axios.get(`${uri}/recipes/${req.params.id}`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  })
    .then((success) => {
      res.send(success.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/ingredients', (req, res) => {
  const { query } = req.query;
  const { token } = req.query;
  axios.get(`${uri}/ingredients?query=${query}`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  })
    .then((success) => {
      res.send(success.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/filteredRecipes', (req, res) => {
  const { ingredients } = req.query;
  const { token } = req.query;
  axios.get(`${uri}/recipes?ingredients=${ingredients}`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  })
    .then((success) => {
      res.send(success.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// PANTRY
app.get('/pantry', (req, res) => {
  const { id } = req.query;
  const { token } = req.query;
  axios.get(`${uri}/pantry?id=${id}`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  })
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      res.send(err);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.delete('/pantry', (req, res) => {
  const data = req.body.deletion;
  const { token } = req.body;
  axios.delete(`${uri}/pantry`, {
    data,
    headers: {
      Authorization: `Token ${token}`,
    },
  })
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.put('/pantry', (req, res) => {
  const data = req.body.update;
  const { token } = req.body;
  axios.put(`${uri}/pantry`, data, {
    headers: {
      Authorization: `Token ${token}`,
    },
  })
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post('/pantry/autocomplete', (req, res) => {
  const { value } = req.body;
  axios.get(`${uri}/ingredients?query=${value}`)
    .then((ingredients) => {
      const { data } = ingredients;
      const parse = data.map((ingredient) => {
        const { name, id, possibleUnits } = ingredient;
        const singleParse = { name, id, possibleUnits };
        return singleParse;
      });
      res.status(200).send(parse);
    })
    .catch((err) => {
      res.status(500).send();
    });
});

app.post('/pantry', (req, res) => {
  const {
    itemData, quantity, token, units,
  } = req.body;
  if (itemData === undefined) {
    res.status(404).send();
    res.end();
  } else {
    const { name, id } = itemData;
    const parse = {
      ingredient: name,
      ingredientId: id,
      quantity: Number(quantity),
      units,
    };
    axios({
      method: 'post',
      url: `${uri}/pantry`,
      data: parse,
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => {
        res.status(201).send();
        res.end();
      })
      .catch((err) => {
        res.status(404).send();
      });
  }
});

// USERS
app.get('/auth', (req, res) => {
  axios.get(`${uri}/api/users/current`)
    .then((response) => {})
    .catch((err) => {});
});

app.post('/signup', (req, res) => {
  const request = { user: req.body };
  axios.post(`${uri}/api/users/`, request)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post('/login', (req, res) => {
  const request = { user: req.body };
  axios.post(`${uri}/api/users/login`, request)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// CONNECTION
app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`listening on port ${port}`);
});
