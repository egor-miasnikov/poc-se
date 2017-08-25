const express = require('express');
const app = express();

let toombler = "ON";

app.get('/',  (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(toombler);
});

app.get('/switcher', (req, res)=> {
    toombler = toombler === "ON" ? "OFF" : "ON"
    res.status(200).json({status: toombler});
});

app.listen(80, () => {
  console.log('Example app listening on port 80!');
});
