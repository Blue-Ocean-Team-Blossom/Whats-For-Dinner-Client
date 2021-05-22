const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`listening on port ${port}`);
});
