const express = require('express');
const app = express();

// Middleware to parse incoming JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  console.log(`[${new Date().toISOString()}] Incoming GET request to /`);
  console.log("Headers:", req.headers);
  console.log("Query params:", req.query);

  const responsePayload = {
    interventionRisk: "high",
    confidence: 0.87,
    recommendedAction: "flag-advisor-review",
    rationale: ["low GPA", "multiple absences"]
  };

  console.log("Sending response:", JSON.stringify(responsePayload, null, 2));

  res.json(responsePayload);
});

// For future POST endpoint (e.g., /evaluate)
app.post('/evaluate', (req, res) => {
  console.log(`[${new Date().toISOString()}] Incoming POST request to /evaluate`);
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);

  const responsePayload = {
    interventionRisk: "medium",
    confidence: 0.73,
    recommendedAction: "monitor",
    rationale: ["moderate absences", "mid-range GPA"]
  };

  console.log("Sending response:", JSON.stringify(responsePayload, null, 2));

  res.json(responsePayload);
});

app.listen(process.env.PORT || 3000, () => console.log('Server running'));