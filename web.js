const express = require('express');
const app = express();
const port = 3000;

const Thermostat = require('./thermostat');
const thermostat = new Thermostat();



app.get('/temperature', (req, res) => {
    const temperature = thermostat.getTemperature();
    res.send(`${temperature} degrees`);
})

app.post('/up', (req, res) => {
    thermostat.up();
    res.send(`increased temperature`);
})

app.post('/down', (req, res) => {
    thermostat.down();
    res.send(`decreased temperature`);
})

app.delete('/temperature', (req, res) => {
    thermostat.reset();
    res.send(`temperature reset`)
})

app.post('/set-power-saving-mode', (req, res) => {
    if (thermostat.maxTemperature === 25) {
        thermostat.setPowerSavingMode(false);
        res.send(`Power saving mode: off`);
    } else {
        thermostat.setPowerSavingMode(true);
        res.send(`Power saving mode: on`)
    }
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);