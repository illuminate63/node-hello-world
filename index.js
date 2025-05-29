// index.js
const express = require('express');
const app = express();

// Middleware to parse JSON bodies (if needed for POST later)
app.use(express.json());

app.get('/', (req, res) => {
  const responsePayload = {
    interventionRisk: "high",
    confidence: 0.87,
    recommendedAction: "flag-advisor-review",
    rationale: ["low GPA", "multiple absences"]
  };

  // Add your log here
  console.log("Sending response:", JSON.stringify(responsePayload, null, 2));

  res.json(responsePayload);
});

app.listen(process.env.PORT || 3000, () => console.log('Server running'));