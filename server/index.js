const express = require('express');
const path = require('path');

const app = express();

app.use('/img', express.static(path.join(__dirname, 'public/img')));

// ... rest of the existing code ... 