// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const VERIFY_TOKEN = 'EAAQq0ZCbKGN8BO1JhGdOlWXrCnp2zq2iR889pH9LciZAM3HUqRlgzIpZBfgu442YGZADrBfOVXMKSZCKXYXVF9hz0AE0ytPpEK6ggMEhehTPwPkgyZCQfGEizyZCkQLqKN2XwWbzpK1G5DBuSbhYIwPZBnGPelUwfUCK1pWo6oyZCJIvs5ZCKmibvIFkMFjrVuiS6UpAZDZD'; // Replace with your actual verify token

app.use(bodyParser.json());

app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token) {
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
});

app.post('/webhook', (req, res) => {
  const body = req.body;

  if (body.object === 'page') {
    body.entry.forEach(function(entry) {
      const webhookEvent = entry.messaging[0];
      console.log(webhookEvent);
    });

    res.status(200).send('EVENT_RECEIVED');
  } else {
    res.sendStatus(404);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
