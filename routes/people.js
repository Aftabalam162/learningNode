const express = require('express');
let {people} = require('../data');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({success:true, data: people});
});


router.post('/', (req,res) => {
    let {name} = req.body;

    if (!name) {
        res.send('Please enter valid data');
    }
    res.status(201).json({success: true, person:name});
});

router.post('/postman', (req,res) => {
    let {name} = req.body;

    if (!name) {
        res.send('Please enter valid data');
    }
    res.status(201).json({success: true, data: [...people, name]});
});

router.put('/:id', (req,res) => {
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

module.exports = router;