const express = require('express');
const app = express();
const evaluateRoute = require('./routes/evaluate');

app.use(express.json());

// Route for student evaluation
app.use('/evaluate', evaluateRoute);

// Basic health check
app.get('/', (req, res) => {
  res.json({ message: 'Innovation Spark API is running' });
});

app.listen(process.env.PORT || 3000, () => console.log('Server running'));