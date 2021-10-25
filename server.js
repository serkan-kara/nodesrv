const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    res.send({message: 'Hello there...'});
})

const server = app.listen(
    8290,
    console.log('Server running on PORT 8290')
)