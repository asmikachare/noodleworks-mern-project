const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.post('/echo', (req, res) => {
  console.log('Received:', req.body);
  res.send('Received data: ' + JSON.stringify(req.body));
});

app.listen(3001, () => {
  console.log('Minimal server running on port 3001');
});