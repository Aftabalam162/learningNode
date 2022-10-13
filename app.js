const express = require('express');
let {people} = require('./data');
const app = express();

// serving static files
app.use(express.static('./method-public'));

//using body parser and extended is false standard
app.use(express.urlencoded({extended: false}));

//json parser 
app.use(express.json());

app.get('/api/people', (req, res) => {
    res.status(200).json({success:true, data: people});
});

app.post('/login', (req, res) => {
    const {name} = req.body;
    if (name) {
        res.send('Done! Thank you!');
    } else {
        res.send('Please submit the data');
    }
})

app.post('/api/people', (req,res) => {
    let {name} = req.body;

    if (!name) {
        res.send('Please enter valid data');
    }
    res.status(201).json({success: true, person:name});
});

app.post('/api/postman/people', (req,res) => {
    let {name} = req.body;

    if (!name) {
        res.send('Please enter valid data');
    }
    res.status(201).json({success: true, data: [...people, name]});
});

app.put('/api/people/:id', (req,res) => {
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find((pep) => pep.id === Number(id))

    if (!person) {
        return res.send(`No such person with id ${id} found!`);
    }

    const newPeople = people.map((guy) => {
        if (guy.id === Number(id)) {
            guy.name = name;
        return people;
    }})

    res.json(newPeople);
    
})

app.listen(5000, console.log('server running...'));
