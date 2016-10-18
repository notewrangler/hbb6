var express = require('express');
var path = require('path');
var chalk = require('chalk');
var http = require('http');
var request = require('request');
var config = require('config');
var conf = require('config');

module.exports = function (config) {
  var defaultConfig = {
    root: __dirname,
    port: 8000,
    host: 'localhost'
  }

  config = Object.assign(defaultConfig, config);

  var app = express();
//middleware here
  app.use(express.static(config.root));
  app.use(express.static('src'));
  app.use(require('body-parser').json());

  app.get("/theroute", function(req,res){
    res.send('theroute')
  })

  app.get("*", function(req, res){
    res.sendFile(path.resolve(config.root + '/index.html'));
  });

  // app.get("/series", function(req, res){
  //   res.sendFile(path.resolve(config.root + '/index.html'));
  // });
  //
  // app.get("concert-detail/:id", function(req, res){
  //   res.sendFile(path.resolve(config.root + '/index.html'));
  // });
  //
  // app.get("/guests", function(req, res){
  //   res.sendFile(path.resolve(config.root + '/index.html'));
  // });
  //
  // app.get("guest-detail/:id", function(req, res){
  //   res.sendFile(path.resolve(config.root + '/index.html'));
  // });
  //
  // app.get("/about-us", function(req, res){
  //   res.sendFile(path.resolve(config.root + '/index.html'));
  // });
  //
  // app.get("/director", function(req, res){
  //   res.sendFile(path.resolve(config.root + '/index.html'));
  // });
  //
  // app.get("/portal", function(req, res){
  //   res.sendFile(path.resolve(config.root + '/index.html'));
  // });






  app.post("/mail", function(req, res) {

    var options = {
      method: 'POST',
      url: 'https://us8-api-mailchimp-com-ab94krbc917w.runscope.net/3.0/lists/e5e0ad4942/members',
      headers: {
        authorization: conf.mKey,
        'content-type': 'application/json',
        'cache-control': 'no-cache'
      },
      body: req.body,
      json: true
    };

    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      console.log(body);
    });

  	res.send('done').status(200);
  });



  var server = http.createServer(app);

  server.listen(config.port, config.host);

  console.log((chalk.cyan('Server started at http://' + config.host + ':' + config.port)));
}

// url: 'https://us8.api.mailchimp.com/3.0/lists/e5e0ad4942/members',
//
