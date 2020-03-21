const express = require("express");
const router = express.Router()

app.get('/', (request, response) => {
    response.send('Hello world');
})

app.listen(3200, () => {
    console.log('Listening on port 3200');
}) 