const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});


app.post('/api/contact', (req, res) => {
  console.log('Received data:', req.body);
  res.status(200).json({ 
    message: 'Data received successfully',
    data: req.body
  });
});


app.listen(PORT, () => {
  console.log(`Simple test server running on port ${PORT}`);
});