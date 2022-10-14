const express = require('express');
const people = require('./routes/people');
const auth = require('./routes/auth');
const app = express();

// serving static files
app.use(express.static('./method-public'));

//using body parser and extended is false standard
app.use(express.urlencoded({extended: false}));

//json parser 
app.use(express.json());

app.use('/api/people', people);
app.use('/login', auth);


app.listen(5000, console.log('server running...'));
