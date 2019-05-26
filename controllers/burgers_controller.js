var express = require('express');
var router = express.Router();
var burgers = require('../models/burgers.js');

router.get('/', function (req, res) 
{
  res.redirect('/index');
});

router.get('/index', function (req, res) 
{
  burgers.selectAll(function(data) 
  {
    var hbsObject = { burgers: data };
    res.render('index', hbsObject);
  });
});

// Create a New Burger
router.post('/burger/create', function (req, res) 
{
  burgers.insertOne(req.body.burger_name, function() 
  {
    res.redirect('/index');
  });
});

// Devour a Burger
router.post('/burger/eat/:id', function (req, res) 
{
  burgers.updateOne(req.params.id, function() 
  {
    res.redirect('/index');
  });
});

// Export routes
module.exports = router;