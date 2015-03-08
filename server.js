var express           = require('express'),
    app               = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/public', express.static(__dirname + '/public'));

app.listen(4000, function() {
  console.log('I\'m Listening on port: 4000');
});