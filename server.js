var express = require('express');
var chalk = require('chalk');
var ch = new chalk.constructor({enable: true, level: 3});

// Create our app
var app = express();
const PORT = process.env.PORT || 3010;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + ch.yellow(PORT));
});
