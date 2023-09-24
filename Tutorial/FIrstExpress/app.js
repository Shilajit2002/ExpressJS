const express = require('express');
const app = express();

/* 
--------- APT ---------
get -> read
post -> create
put -> update --> Update all the Data
patch -> update --> Update a perticular data also we can update all data
delete -> delete
*/

// Create API
// app.get(route,callback)

/*
1.The callback function has 2 parameters, request(req) and response(res).
2.The request object(req) represents the HTTP request and has properties for the request query string,parameters,body,HTTP headers etc.
3.Similarly, the response object represents the HTTP response that the Express app sends when it receives an HTTP request.
*/

// get request
app.get("/", (req, res) => {
    res.send("First Express Server");
});

// get about page request
app.get("/about", (req, res) => {
    res.send("First Express Server from About");
});

// Listen port
app.listen(8000, () => {
    console.log(`Server Listening at Port http://localhost:8000`)
})