const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Main server is running');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


const Contact = require('./models/Contact');

app.post('/api/contact', async (req, res) => {
  try {
    console.log('Received contact form data:', req.body);
    const { name, email, phone, message } = req.body;
    
    const newContact = new Contact({
      name,
      email,
      phone,
      message
    });
    
    const savedContact = await newContact.save();
    console.log('Saved contact:', savedContact);
    res.status(201).json(savedContact);
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
});

app.get('/api/contact', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ timestamp: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});