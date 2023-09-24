const express = require('express');
const app = express();
const port = 3000;

app.route('/').get((req, res) => {
    res.send("Get Request");
}).post((req, res) => {
    res.send("Post Request");
}).all((req, res) => {
    res.send("Other Request");
})

app.listen(port, () => {
    console.log(`Server Listening at Port http://localhost:${port}`)
})