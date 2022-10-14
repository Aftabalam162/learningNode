
let {people} = require('../data');

//creating controller

const getPeople = (req, res) => {
    res.status(200).json({success:true, data: people});
};

const createPeople = (req,res) => {
    let {name} = req.body;

    if (!name) {
        res.send('Please enter valid data');
    }
    res.status(201).json({success: true, person:name});
};

const createPeoplePostman = (req,res) => {
    let {name} = req.body;

    if (!name) {
        res.send('Please enter valid data');
    }
    res.status(201).json({success: true, data: [...people, name]});
}

const updatePeople = (req,res) => {
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
    
}

const deletePeople = (req, res) => {
    const {id} = req.params
    const person = people.find((guy) => {return guy.id === Number(id)})

    if (!person) {
        return res.send('There is no person with such ID');
    }

    const newPeople = people.filter((guy) => {return guy.id !== Number(id)})
    res.json(newPeople);
}

module.exports = {
    getPeople,
    createPeople,
    createPeoplePostman,
    updatePeople,
    deletePeople
}