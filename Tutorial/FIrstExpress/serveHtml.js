const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Set the Path for index.html file
const staticPath = path.join(__dirname, "./public");

// Static Path 
app.use(express.static(staticPath))

app.get("/", (req, res) => {
    res.write("<h1>Hello World</h1>");
    res.write("<h2>Hello World</h2>");
    res.send();
})

app.listen(port, () => {
    console.log(`Server Listening at Port http://localhost:${port}`)
})