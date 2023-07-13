const express = require('express');
const app = express();
const port = 3000;


app.get('/numbers/random', (req, res) => {
  const randomNum = Math.floor(Math.random() * 100);
  res.json({ number: randomNum });
});


app.get('/numbers/calculate', (req, res) => {
  const { num1, num2 } = req.query;
  const result = Number(num1) + Number(num2);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Number Management Microservice listening at http://localhost:${port}`);
});
