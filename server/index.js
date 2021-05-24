const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;


app.get('/ingredients/auto', (req, res) => {
  var dummydata = [
    {
        id: 296687,
        title: "chicken",
        imageType: "jpg"
    },
    {
        id: 42569,
        title: "chicken bbq",
        imageType: "jpg"
    },

    {
        id: 83890,
        title: "chicken blt",
        imageType: "jpg"
    },
    {
        id: 737543,
        title: "chicken pie",
        imageType: "jpg"
    }
  ]
  res.send(dummydata);
})

app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`listening on port ${port}`);
});

