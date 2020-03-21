var express = require('express');
var app = express();

app.set('view engine', 'html');
app.set('views', 'views');

app.use(express.logger());
app.use(express.urlencoded({ extended : false}));
app.use(express.json());
app.use(express.bodyParser());
app.use(express.cookieParser());

app.use(express.static(__dirname + '/scripts'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/img'));

app.use(app.router);

app.get('/', (request, response) => {
    response.send('Hello world');
})

app.listen(3200, () => {
    console.log('Listening on port 3200');
})