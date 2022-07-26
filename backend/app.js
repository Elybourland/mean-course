const express = require('express');

const app = express();

app.use((req, res, next) => {
  // if (req.url === '/favicon.ico') {
  //   return;
  // }
  console.log('First middleware');
  console.log(req.url);
  next();
});

app.use((req, res, next) => {
  res.send('Hello from express!');
});

module.exports = app;
