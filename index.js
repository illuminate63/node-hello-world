// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello from Render!'));
app.listen(process.env.PORT || 3000, () => console.log('Server running'));