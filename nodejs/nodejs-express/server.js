const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Beer = require('./src/models/beer');

// connect to the beer locker database
mongoose.connect('mongodb://localhost:27017/beerlocker', {
  useMongoClient: true,
});

// get the port from environment or use default 3000 as port.
const PORT = process.env.PORT || 3000;

// create a new express application.
const app = express();

// use the body parser.
app.use(bodyParser.urlencoded({
  extended: true,
}));

// configure the base router for api.
const router = express.Router();
router.get('/', (req, res) => {
  res.send('Too low on beer.');
});

// create beers route
const beersRoute = router.route('/beer');

beersRoute.post((req, res) => {
  const beer = new Beer();
  beer.name = req.body.name;
  beer.type = req.body.type;
  beer.quantity = req.body.quantity;

  beer.save((error) => {
    if (error) {
      res.send(error);
    }
    console.log(beer);
    res.json({ message: 'Beer added to the locker.', data: beer });
  });
});

beersRoute.get((req, res) => {
  Beer.find((err, beers) => {
    if (err) {
      res.send(err);
    }
    res.json(beers);
  });
});

// register the router.
app.use('/api', router);

// listen on the port.
app.listen(PORT);
console.log(`Listening on port ${PORT}. Go to link http://localhost:${PORT}/`);
