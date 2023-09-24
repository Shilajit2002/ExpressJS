const express = require('express');
const app = express();

// Import Router
const router = new express.Router();

router.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

// Use the Router
app.use(router);

// Listen port
app.listen(8000, () => {
    console.log(`Server Listening at Port http://localhost:8000`)
})


