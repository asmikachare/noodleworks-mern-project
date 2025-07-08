const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

app.get('/', (req, res) => {
  console.log('GET request received');
  res.json({ message: 'Server is running!' });
});

app.post('/api/contact', (req, res) => {
  console.log('POST request received:', req.body);
  res.status(200).json({ 
    success: true,
    message: 'Data received successfully',
    data: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
  console.log(`Try accessing: http://localhost:${PORT}/`);
});