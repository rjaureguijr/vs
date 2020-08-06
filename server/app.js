const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const EventService = require('./eventService');

const app = express();
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const eventService = new EventService();
const port = process.env.PORT || 8080;

app
  .use(cors())
  .use(express.static(PUBLIC_DIR))
  .use(bodyParser.json())
  .get('/events', eventService.getEvents)
  .post('/events', eventService.postEvent)
  .delete('/events', eventService.deleteEvent)
  .listen(port, () => {
      console.info('fe-code-challenge is running on http://localhost:' + port);
  });

module.exports = app;
