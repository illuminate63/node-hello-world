const axios = require('axios');

async function evaluateStudentProfile(profileData, promptTemplate) {
  const prompt = promptTemplate.replace('{input}', JSON.stringify(profileData, null, 2));

  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
    },
    {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );

  const raw = response.data.choices[0].message.content;
  return JSON.parse(raw);
}

module.exports = { evaluateStudentProfile };