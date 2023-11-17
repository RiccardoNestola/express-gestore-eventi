
const Event = require('../models/event');

function index  (req, res)  {

    let events = Event.getAll();

    //http://localhost:3000/events?title=Rock&description=concerto&date=2023-12-05

    if (req.query.title) {
        events = events.filter(event => event.title.includes(req.query.title));
    }
    if (req.query.description) {
        events = events.filter(event => event.description.includes(req.query.description));
    }
    if (req.query.date) {
        events = events.filter(event => event.date === req.query.date);
    }

    res.json(events);
};

function show  (req, res)  {

    const event = Event.findById(req.params.event);

    if (event) {
        res.json(event);
    } else {
        res.status(404).send('Evento non trovato');
    }

    res.json(event);
};




function store (req, res)  {
    
    const { id, title, description, date, maxSeats } = req.body;


    let errors = [];

    if (!title) errors.push("Titolo mancante");
    if (!description) errors.push("Descrizione mancante");
    if (!date) errors.push("Data mancante");
    if (!maxSeats) errors.push("Numero di posti massimi mancante");
    if (isNaN(maxSeats)) errors.push("Numero di posti massimi deve essere un numero");

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    const newEvent = new Event(id, title, description, date, maxSeats);

    Event.add(newEvent);

    res.status(201).json({ message: 'Evento aggiunto con successo', event: newEvent });
    
};





function update (req, res)  {
    res.send('update: ' + req.params.event);
};



module.exports = {
    index,
    show,
    store,
    update
};
