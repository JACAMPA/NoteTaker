const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiroute')(app);
require('./routes/htmlroute')(app);



  //listening on
app.listen(PORT, () =>
  console.log(`listening at http://localhost:${PORT}`)
);