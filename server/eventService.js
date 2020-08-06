class EventService {
    constructor() {
        this.events = require('./events');

        this.missingEventDataMessage = 'Missing event data: an id, name, date, and venue is required';
        this.duplicateIdMessage = 'An event with this id already exists; ids must be unique'
        this.missingEventIdMessage = 'Missing event data: an id is required';
        this.idDoesNotExistMessage = 'No event exists with this id'
        this.serverErrorMessage = 'Oops, a server error occurred';

        this.getEvents = this.getEvents.bind(this);
        this.postEvent = this.postEvent.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
    }

    static shouldSendServerError() {
        return Math.random() > 0.9;
    }

    static hasId(id, events) {
        return !!events.find(event => event.id === id);
    }

    getEvents(req, res) {
        if (EventService.shouldSendServerError()) {
            res.status(500).send(this.serverErrorMessage);
            return;
        }

        res.status(200).send(this.events);
    }

    postEvent(req, res) {
        if (EventService.shouldSendServerError()) {
            res.status(500).send(this.serverErrorMessage);
            return;
        }

        const { body } = req;
        if (!body || !body.id || !body.name || !body.date || !body.venue) {
            res.status(400).send(this.missingDataMessage);
            return;
        } else if (EventService.hasId(body.id, this.events)) {
            res.status(400).send(this.duplicateIdMessage);
            return;
        }

        this.events.push(body);
        res.status(200).end();
    }

    deleteEvent(req, res) {
        if (EventService.shouldSendServerError()) {
            res.status(500).send(this.serverErrorMessage);
            return;
        }

        const { body } = req;
        if (!body || !body.id) {
            res.status(400).send(this.missingEventIdMessage);
            return;
        } else if (!EventService.hasId(body.id, this.events)) {
            res.status(400).send(this.idDoesNotExistMessage);
            return;
        }

        this.events = this.events.filter(event => event.id !== body.id);
        res.status(200).end();
    }
}

module.exports = EventService;
