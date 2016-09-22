var newrelic = require('newrelic');
var app = require('express')();

console.log(newrelic);
// In Express, this lets you call newrelic from within a template.
app.locals.newrelic = newrelic;

app.set('view engine', 'jade');

app.get('/0.5*', function(req, res) {
  res.render('five');
})

app.get('/*', function(req, res) {
  res.render('index');
})
  
setInterval(function() {
  console.log((new Date()).getTime());
}, 2000);

var port = process.env.PORT || 3001;
console.log('Listen http://localhost:' + port)
app.listen(port);
