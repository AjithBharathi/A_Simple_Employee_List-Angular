const express = require('express');
const path = require('path');

var app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/', (req, res) => {
    res.send('hai')
})

app.listen(PORT, ()=>{
    console.log('server has been connected at port '+PORT)
});