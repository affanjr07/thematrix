require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Static folder
app.use('/public', express.static(path.join(__dirname, '..', 'public')));

// JSON parser
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('API berjalan!');
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
