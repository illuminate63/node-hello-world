const express = require('express');
const { evaluateStudentProfile } = require('../middleware/llmRouter');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const studentData = req.body;
    const prompt = `You are an AI helping identify intervention risk. Respond with JSON only:\n\n{input}`;

    const result = await evaluateStudentProfile(studentData, prompt);
    res.json(result);
  } catch (err) {
    console.error("Evaluation failed:", err.message);
    res.status(500).json({ error: "Failed to evaluate" });
  }
});

module.exports = router;