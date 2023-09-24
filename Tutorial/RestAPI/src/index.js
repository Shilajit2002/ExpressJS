// Import Express
const express = require('express');
const app = express();

// Access Port
const port = process.env.PORT || 8000;

// Import Database Connection
require("./db/conn");

// Import Router for User
const userRouter=require("./router/userRouter");

app.use(express.json());
//  Use User Router
app.use(userRouter);

//  Listening the Port
app.listen(port, () => {
    console.log(`Server Listening at Port http://localhost:${port}`)
})