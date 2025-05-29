// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('request: ' + req.json());
  res.json({
    interventionRisk: "high",
    confidence: 0.87,
    recommendedAction: "flag-advisor-review",
    rationale: ["low GPA", "multiple absences"]
  });
});

app.listen(process.env.PORT || 3000, () => console.log('Server running'));