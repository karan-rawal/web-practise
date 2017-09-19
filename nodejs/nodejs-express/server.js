const express = require('express');

// get the port from environment or use default 3000 as port.
const PORT = process.env.PORT || 3000;

// create a new express application.
const app = express();

// configure the base router for api.
const router = express.Router();
router.get('/api', (req, res) => {
  res.send('Too low on beer.');
});

// register the router.
app.use('/', router);

// listen on the port.
app.listen(PORT);
console.log(`Listening on port ${PORT}. Go to link http://localhost:${PORT}/`);
